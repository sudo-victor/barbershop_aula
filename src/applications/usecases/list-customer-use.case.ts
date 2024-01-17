import { CustomerRepository } from "../repositories/customer-repository";

export class ListCustomerUseCase {
  constructor(private customerRepository: CustomerRepository) {}
  
  async execute() {
    const result = await this.customerRepository.findAll()
    return result
  }
}
