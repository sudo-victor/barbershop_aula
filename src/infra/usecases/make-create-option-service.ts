import { CreateOptionServiceUseCase } from "../../applications/usecases/create-option-service-use-case";
import { CreateOptionServiceController } from "../controllers/option-services/create-option-service-controller";
import { AdminRepositoryMongo } from "../repositories/admin-repository-mongo";
import { OptionServiceRepositoryMongo } from "../repositories/option-service-repository-mongo";

export class MakeCreateOptionService {
  static make() {
    const adminRepository = new AdminRepositoryMongo()
    const serviceRepository = new OptionServiceRepositoryMongo()
    const usecase = new CreateOptionServiceUseCase(serviceRepository, adminRepository)
    const controller = new CreateOptionServiceController(usecase)
    return controller
  }
}