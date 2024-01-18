import { test, expect } from "vitest"
import { randomUUID } from "crypto"
import axios from "axios"

test.skip("POST /customers", async () => {
  const body = {
    name: "Deivid",
    cpf: randomUUID(),
    email: `deivid_${Math.random()}@email.com`,
    phone: "21999999999",
    password: "123123",
  }
  const response = await axios.post("http://localhost:3333/customers", body)
  const result = response.data
  expect(response.status).toEqual(201)
  expect(result.data.name).toEqual("Deivid")
  expect(result.data._id).toBeDefined()
})
