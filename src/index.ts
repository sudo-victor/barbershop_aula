import "dotenv/config";
import { app } from "./infra/http/server";
import { Database } from "./infra/database/connection";

Database.connect()

app.listen(process.env.PORT, () => { console.log("Server is running") })