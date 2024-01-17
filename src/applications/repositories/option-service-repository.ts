import { IOptionService } from "../../entities/option-service";

export interface CreateServiceProps {
  name: string
  description: string
  duration: number
  price: number
  photo: string
}

export interface OptionServiceRepository {
  save(service: CreateServiceProps): Promise<IOptionService>
  find(): Promise<IOptionService[]>
}