import { Schema, model, Document } from "mongoose"

export interface IOptionService extends Document {
  name: string
  description: string
  duration: number
  price: number
  photo: string
}

const OptionServiceSchema = new Schema<IOptionService>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
  photo: { type: String, required: true },
}, { timestamps: true })

export const OptionServiceModel = model("OptionService", OptionServiceSchema)
