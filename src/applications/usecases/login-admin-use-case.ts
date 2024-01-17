import { Hasher } from "../cryptography/hasher";
import { Jwt } from "../jwt/jwt";
import { AdminRepository } from "../repositories/admin-repository";

interface Input {
  cpf: string;
  password: string;
}

export class LoginAdminUseCase {
  constructor(
    private adminRepository: AdminRepository,
    private hasher: Hasher,
    private jwt: Jwt
  ) {}

  async execute(input: Input) {
    const admin = await this.adminRepository.findByCpf(input.cpf)
    if (!admin) {
      throw new Error("Invalid credentials")
    }
    const passwordIsValid = await this.hasher.compare(input.password, admin.password)
    if(!passwordIsValid) {
      throw new Error("Invalid credentials")
    }
    const token = this.jwt.generate({ id: admin.id, cpf: admin.cpf })
    return token
  }
}