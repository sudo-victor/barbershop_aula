import { ListOptionServiceUseCase } from "../../applications/usecases/list-option-service-use-case";
import { ListOptionServiceController } from "../controllers/option-services/list-option-service-controller";
import { AdminRepositoryMongo } from "../repositories/admin-repository-mongo";
import { OptionServiceRepositoryMongo } from "../repositories/option-service-repository-mongo";

export class MakeListOptionService {
  static make() {
    const serviceRepository = new OptionServiceRepositoryMongo()
    const usecase = new ListOptionServiceUseCase(serviceRepository)
    const controller = new ListOptionServiceController(usecase)
    return controller
  }
}