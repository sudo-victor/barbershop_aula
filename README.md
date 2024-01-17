Atualmente, gerencio uma barbearia e enfrento um desafio significativo na organização dos agendamentos, o que frequentemente demanda um esforço considerável. Utilizo um caderno de papel para registrar os compromissos. O procedimento é simples: quando alguém me liga ou envia uma mensagem, verifico a disponibilidade do horário e, se estiver livre, faço a anotação no papel. No entanto, considero esse método cansativo e suscetível a perda de informações.

Preciso de uma forma eficiente que meus CLIENTES consigam fazer os AGENDAMENTOS rápido, sem precisar me preocupar.

Quais sao os SERVICOs?

corte : 20 min
corte + barba : 40 min
barba : 20 min
sombrancelha : 5 min

tolerancia? 10 min para cancelar
qual tempo de intervalo entre um e outro?  10 min

Entitade: Dados com estados + identify(ID)

Quais saos as entidades?
Quais sao as funcionalidades? 


entidades:
- Cliente
- Agendamento
- Serviço

funcionalidades:
- Cadastro do cliente
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


SERVICE -> Dita as regras das funcionalidades

[x] - Validar de credencial -> Middleware de token
[ ] - Validar o tipo de usuário -> Permissionamento

[x] - Rota de login do admin
[ ] - Upload Imagens
[ ] - Pagination

[ ] - Testes

