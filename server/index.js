import express from "express";
import Connection from "./database/dbconnection.js";
import router from "./routes/bookRoutes.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
dotenv.config();
app.use("/books", router);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

const PORT = 8000;

app.listen(PORT, () => console.log(`server connected to port ${PORT}`));
