import { Request, Response } from "express";
import { ListCustomerUseCase } from "../../../applications/usecases/list-customer-use.case";

export class ListCustomerController {
  constructor(private usecase: ListCustomerUseCase) {}

  async handler(req: Request, res: Response) {
    console.log((req as any).id)
    const result = await this.usecase.execute()
    return res.json({ customers: result })
  }
}