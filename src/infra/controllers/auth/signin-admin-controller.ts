import { Request, Response } from "express";
import { loginBodyValidator } from "../../validations/login-body-validator";
import { LoginAdminUseCase } from "../../../applications/usecases/login-admin-use-case";

export class SigninAdminController {
  constructor(private usecase: LoginAdminUseCase) {}

  async handler(req: Request, res: Response) {
    const { body } = req;
    const bodyIsValid = await loginBodyValidator(body)
    if (!bodyIsValid.isValid) {
      return res.status(400).json({ message: bodyIsValid.message })
    }
    try {
      const usecase = await this.usecase.execute(body)
      return res.json({ data: usecase })
    } catch (err: any) {
      return res.status(400).json({ message: err.message })
    }
  }
}