import { CreateCustomerUseCase } from "../../applications/usecases/create-customer-use-case"
import { CreateCustomerController } from "../controllers/customers/create-customer-controller"
import { HashBcrypt } from "../cryptography/hasher-bcrypt"
import { CustomerRepositoryMongo } from "../repositories/customer-repository-mongo"

export class MakeCreateCustomer {
  static make() {
    const hasher = new HashBcrypt()
    const customerRepository = new CustomerRepositoryMongo()
    const createCustomerUseCase = new CreateCustomerUseCase(customerRepository, hasher)
    const createCustomerController = new CreateCustomerController(createCustomerUseCase)
    return createCustomerController
  }
}