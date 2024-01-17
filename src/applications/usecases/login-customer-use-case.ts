import { Hasher } from "../cryptography/hasher";
import { Jwt } from "../jwt/jwt";
import { CustomerRepository } from "../repositories/customer-repository";

interface Input {
  cpf: string;
  password: string;
}

export class LoginUseCase {
  constructor(
    private customerRepository: CustomerRepository,
    private hasher: Hasher,
    private jwt: Jwt
  ) {}

  async execute(input: Input) {
    const customer = await this.customerRepository.findByCpf(input.cpf)
    if (!customer) {
      throw new Error("Invalid credentials")
    }
    const passwordIsValid = await this.hasher.compare(input.password, customer.password)
    if(!passwordIsValid) {
      throw new Error("Invalid credentials")
    }
    const token = this.jwt.generate({ id: customer.id, cpf: customer.cpf })
    return token
  }
}