import { AdminRepository, CreateAdminProps } from "../../applications/repositories/admin-repository";
import { AdminModel, IAdmin } from "../../entities/admin";

export class AdminRepositoryMongo implements AdminRepository {
  save(admin: CreateAdminProps): Promise<IAdmin> {
    return AdminModel.create(admin)
  }
  findById(id: string): Promise<IAdmin | null> {
    return AdminModel.findById(id)
  }
  
  async findByCpf(cpf: string): Promise<IAdmin | null> {
    return AdminModel.findOne({ cpf })
  }
}