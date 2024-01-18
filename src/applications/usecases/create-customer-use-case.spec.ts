import { expect, it, vi, beforeEach } from "vitest"
import { CreateCustomerUseCase } from "./create-customer-use-case"
import { CreateCustomerInput, CustomerRepository } from "../repositories/customer-repository"
import { ICustomer } from "../../entities/customer"
import { Hasher } from "../cryptography/hasher"

let hasher: Hasher;
let customerRepository: CustomerRepository;
let usecase: CreateCustomerUseCase;

beforeEach(() => {
  customerRepository = {
    findAll: vi.fn(),
    findByCpf: vi.fn(),
    save: vi.fn()
  } 
  hasher = {
    encrypt: vi.fn(),
    compare: vi.fn()
  }
  usecase = new CreateCustomerUseCase(
    customerRepository,
    hasher,
  )
})

it("should be able to throw an error if customer already exists", async () => {
  const params = {
    name: "Deivid",
    cpf: "12312312311",
    email: "deivid@email.com",
    phone: "21999999999",
    password: "123123",
  }
  vi.spyOn(customerRepository, "findByCpf").mockResolvedValue({} as any)
  const callback = () => usecase.execute(params)
  expect(callback).rejects.toThrow("Customer already exists")
})

it("should be able to create customer", async () => {
  const params = {
    name: "Deivid",
    cpf: "12312312311",
    email: "deivid@email.com",
    phone: "21999999999",
    password: "123123",
  }
  vi.spyOn(customerRepository, "findByCpf").mockResolvedValue(null)
  vi.spyOn(customerRepository, "save").mockResolvedValue({ ...params, _id: "algum_id_ai", password: "123123_hashed" } as any)
  vi.spyOn(hasher, "encrypt").mockResolvedValue("123123_hashed")
  const result = await usecase.execute(params)
  expect(result._id).toBeDefined()
  expect(result.name).toBe("Deivid")
  expect(result.cpf).toBe("12312312311")
  expect(result.email).toBe("deivid@email.com")
  expect(result.phone).toBe("21999999999")
  expect(result.password).toBe("123123_hashed")
})
