import { CreateServiceProps, OptionServiceRepository } from "../../applications/repositories/option-service-repository";
import { IOptionService, OptionServiceModel } from "../../entities/option-service";

export class OptionServiceRepositoryMongo implements OptionServiceRepository {
  async find(): Promise<IOptionService> {
    return OptionServiceModel.find()
  }
  async save(service: CreateServiceProps): Promise<IOptionService> {
    return OptionServiceModel.create(service)
  }
}