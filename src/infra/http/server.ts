import express from "express"
import { MakeCreateCustomer } from "../usecases/make-create-customer"
import { MakeLogin } from "../usecases/make-login"
import { MakeListCustomer } from "../usecases/make-list-customer"
import { EnsuredAuthMiddleware } from "../middlewares/ensured-auth-middleware"
import { MakeCreateOptionService } from "../usecases/make-create-option-service"
import { MakeLoginAdmin } from "../usecases/make-login-admin"
import { storageMiddleware } from "../middlewares/upload-middleware"
import { MakeListOptionService } from "../usecases/make-list-option-service"

const app = express()
app.use(express.json())
app.use(express.static("www"))

const createCustomer = MakeCreateCustomer.make()
const login = MakeLogin.make()
const loginAdmin = MakeLoginAdmin.make()
const listCustomer = MakeListCustomer.make()
const createOptionService = MakeCreateOptionService.make()
const listOptionService = MakeListOptionService.make()

app.post("/customers", createCustomer.handler.bind(createCustomer))
app.post("/signin", login.handler.bind(login))
app.post("/signin/admin", loginAdmin.handler.bind(loginAdmin))
app.get("/customers", EnsuredAuthMiddleware.handler.bind(EnsuredAuthMiddleware), listCustomer.handler.bind(listCustomer))
app.post("/option-services", storageMiddleware.single("photo"), EnsuredAuthMiddleware.handler.bind(EnsuredAuthMiddleware), createOptionService.handler.bind(createOptionService))
app.get("/option-services", listOptionService.handler.bind(listOptionService))

export { app }
