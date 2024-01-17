import { AdminRepository } from "../repositories/admin-repository";
import { OptionServiceRepository } from "../repositories/option-service-repository";

interface Input {
  adminId: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  photo: string;
}

export class CreateOptionServiceUseCase {
  constructor(
    private optionServiceRepository: OptionServiceRepository,
    private adminRepository: AdminRepository) {}

  async execute(input: Input) {
    const admin = await this.adminRepository.findById(input.adminId)
    if (!admin) {
      throw new Error("Admin not found")
    }

    const result =  await this.optionServiceRepository.save(input)
    return result
  }
}