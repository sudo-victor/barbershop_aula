import { LoginUseCase } from "../../applications/usecases/login-customer-use-case"
import { SigninController } from "../controllers/auth/signin-controller"
import { HashBcrypt } from "../cryptography/hasher-bcrypt"
import { TokenJwt } from "../jwt/token-jwt"
import { CustomerRepositoryMongo } from "../repositories/customer-repository-mongo"

export class MakeLogin {
  static make() {
    const hasher = new HashBcrypt()
    const jwt = new TokenJwt()
    const customerRepository = new CustomerRepositoryMongo()
    const loginUseCase = new LoginUseCase(customerRepository, hasher, jwt)
    const signinController = new SigninController(loginUseCase)
    return signinController
  }
}