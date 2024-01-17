import { Request, Response } from "express";
import { ListOptionServiceUseCase } from "../../../applications/usecases/list-option-service-use-case";

export class ListOptionServiceController {
  constructor(private usecase: ListOptionServiceUseCase) {}

  async handler(req: Request, res: Response) {
    try {
      const result = await this.usecase.execute()
      const optionServices = result.map((service) => ({
        name: service.name,
        description: service.description,
        duration: service.duration,
        price: service.price,
        id: service._id,
        photo: `http://localhost:3333/${service.photo}`
      }))
      return res.status(201).json({ optionServices })
    } catch (err: any) {
      return res.status(400).json({ message: err.message })
    }
  }
}