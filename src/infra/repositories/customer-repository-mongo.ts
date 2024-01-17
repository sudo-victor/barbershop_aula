import { CreateCustomerInput, CustomerRepository } from "../../applications/repositories/customer-repository";
import { CustomerModel, ICustomer } from "../../entities/customer";

export class CustomerRepositoryMongo implements CustomerRepository {
  async findByCpf(cpf: string): Promise<ICustomer | null> {
    return CustomerModel.findOne({ cpf })
  }
  
  async save(customer: CreateCustomerInput): Promise<ICustomer> {
    return CustomerModel.create(customer)
  }

  async findAll() {
    return CustomerModel.find()
  }
}