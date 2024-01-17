import { LoginAdminUseCase } from "../../applications/usecases/login-admin-use-case"
import { SigninAdminController } from "../controllers/auth/signin-admin-controller"
import { HashBcrypt } from "../cryptography/hasher-bcrypt"
import { TokenJwt } from "../jwt/token-jwt"
import { AdminRepositoryMongo } from "../repositories/admin-repository-mongo"

export class MakeLoginAdmin {
  static make() {
    const hasher = new HashBcrypt()
    const jwt = new TokenJwt()
    const adminRepository = new AdminRepositoryMongo()
    const loginUseCase = new LoginAdminUseCase(adminRepository, hasher, jwt)
    const signinController = new SigninAdminController(loginUseCase)
    return signinController
  }
}