import { IAdmin } from "../../entities/admin"

export interface CreateAdminProps {
  cpf: string;
  password: string;
}

export interface AdminRepository {
  save(admin: CreateAdminProps): Promise<IAdmin>;
  findById(id: string): Promise<IAdmin | null>
  findByCpf(cpf: string): Promise<IAdmin | null>
}
