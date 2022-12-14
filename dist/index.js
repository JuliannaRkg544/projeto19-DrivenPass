import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
dotenv.config();
var port = process.env.PORT || 4001;
var server = express();
server.use(json());
server.use(cors());
server.use(router);
server.use(errorHandler);
server.listen(port, function () { console.log("server running on port: ".concat(port)); });
