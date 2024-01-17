import { Schema, model, Document } from "mongoose"

export interface IAdmin extends Document {
  cpf: string;
  password: string;
}

const AdminSchema = new Schema<IAdmin>({
  cpf: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true })

export const AdminModel = model("Admin", AdminSchema)
