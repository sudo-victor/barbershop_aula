import { Hasher } from "../cryptography/hasher";
import { CreateCustomerInput, CustomerRepository } from "../repositories/customer-repository";

// Single Responsability Principle
// Inversao de Dependencia(SOLID -> Dependency Inversion)
export class CreateCustomerUseCase {
  constructor(
    private customerRepository: CustomerRepository,
    private hasher: Hasher
  ) {}

  async execute(input: CreateCustomerInput) {
    const customerExists = await this.customerRepository.findByCpf(input.cpf)
    if (customerExists) {
      throw new Error("Customer already exists")
    }

    const data = {
      ...input,
      password: await this.hasher.encrypt(input.password)
    }
    const result = await this.customerRepository.save(data)
    return result
  }
}
