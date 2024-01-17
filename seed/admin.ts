import "dotenv/config"
import { AdminModel } from "../src/entities/admin";
import { HashBcrypt } from "../src/infra/cryptography/hasher-bcrypt";
import { Database } from "../src/infra/database/connection";

async function run() {
  await Database.connect()
  const hasher = new HashBcrypt()
  await AdminModel.create({
    cpf: "99999999999",
    password: await hasher.encrypt("123123")
  })
}

run()