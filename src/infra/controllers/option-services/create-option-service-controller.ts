import { Request, Response } from "express";
import { CreateOptionServiceUseCase } from "../../../applications/usecases/create-option-service-use-case";

export class CreateOptionServiceController {
  constructor(private usecase: CreateOptionServiceUseCase) {}

  async handler(req: Request, res: Response) {
    const { body } = req

    try {
      const data = {
        ...body,
        photo: req.file?.filename,
        adminId: req.id
      }
      const result = await this.usecase.execute(data)
      return res.status(201).json({ optionService: result })
    } catch (err: any) {
      return res.status(400).json({ message: err.message })
    }
  }
}