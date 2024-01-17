import { Request, Response } from "express";
import { createCustomerBodyValidator } from "../../validations/create-customer-body-validator";
import { CreateCustomerUseCase } from "../../../applications/usecases/create-customer-use-case";

export class CreateCustomerController {
  constructor(
    private usecase: CreateCustomerUseCase
  ) {}

  async handler(req: Request, res: Response) {
    const { body } = req
  
    const bodyIsValid = await createCustomerBodyValidator(body)
    if (!bodyIsValid.isValid) {
      return res.status(400).json({ message: bodyIsValid.message })
    }
  
    try {
      const usecase = await this.usecase.execute(body)
      return res.status(201).json({ data: usecase })
    } catch (error: any) {
      return res.status(400).json({ message: error.message })
    }
  }
}