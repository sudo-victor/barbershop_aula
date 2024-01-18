import "dotenv/config"
import { test, expect } from "vitest"
import { randomUUID } from "crypto"
import supertest from "supertest"
import { app } from "../../src/infra/http/server"
import { Database } from "../../src/infra/database/connection"

Database.connect()

const server = supertest(app)

test.only("POST /customers", async () => {
  const body = {
    name: "Deivid",
    cpf: randomUUID(),
    email: `deivid_${Math.random()}@email.com`,
    phone: "21999999999",
    password: "123123",
  }

  const result = await server
    .post("/customers")
    .send(body)

  expect(result.status).toEqual(201)
})

// CI/CD -> Continuos integration/Continous deploy
