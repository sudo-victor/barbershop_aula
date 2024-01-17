import { ICustomer } from "../../entities/customer";

export interface CreateCustomerInput {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  password: string;
}

export interface CustomerRepository {
  findAll(): Promise<ICustomer[]>
  findByCpf(cpf: string): Promise<ICustomer | null>
  save(customer: CreateCustomerInput): Promise<ICustomer>
}
