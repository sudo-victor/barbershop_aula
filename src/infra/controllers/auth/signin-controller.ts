import { Request, Response } from "express";
import { LoginUseCase } from "../../../applications/usecases/login-customer-use-case";
import { loginBodyValidator } from "../../validations/login-body-validator";

export class SigninController {
  constructor(private usecase: LoginUseCase) {}

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