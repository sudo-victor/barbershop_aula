import { ListCustomerUseCase } from "../../applications/usecases/list-customer-use.case";
import { ListCustomerController } from "../controllers/customers/list-customer-controller";
import { CustomerRepositoryMongo } from "../repositories/customer-repository-mongo";

export class MakeListCustomer {
  static make() {
    const repository = new CustomerRepositoryMongo()
    const usecase = new ListCustomerUseCase(repository)
    const controller = new ListCustomerController(usecase)
    return controller
  }
}