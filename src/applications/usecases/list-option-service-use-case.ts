import { OptionServiceRepository } from "../repositories/option-service-repository";

export class ListOptionServiceUseCase {
  constructor(
    private optionServiceRepository: OptionServiceRepository) {}

  async execute() {
    const result =  await this.optionServiceRepository.find()
    return result
  }
}