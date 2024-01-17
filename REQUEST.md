
entidades:
- Cliente
- Agendamento
- Serviço

(Customer)Cliente {
  name: String
  cpf: String
  email: String
  phone: String
  password: String
}

(Appointment)Agendamento {
  startedAt: Date
  optionService: OptionService
  cliente: Cliente
}

(OptionService) Serviço {
  name: string
  description: string
  duration: number
  photo: string
}




funcionalidades:
- Cadastro do cliente
- Login
- Cliente fazer agendamento
- Cancelamento do agendamento
- Modificar o horário/dia agendamento
- O cliente pode consultar o agendamento
- A barbearia pode visualizar os agendamentos
- A barbearia pode cadastrar os serviços

regras:
- Eu sempre abro das 9h as 20h todos os dias da semana, menos segunda.
- tolerancia de 10min para cancelar
- intervalo de 10min entre um agendamento e outro
- todos os dias 12h a 13h -> horário de almoço


SEED