import { Schema, model, Document } from "mongoose"

export interface ICustomer extends Document {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  password: string;
}

const CustomerSchema = new Schema<ICustomer>({
  name: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
}, { timestamps: true })

export const CustomerModel = model("Customer", CustomerSchema)
