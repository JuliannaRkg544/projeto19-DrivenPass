import express, {json} from "express";
import "express-async-errors"
import dotenv from "dotenv"
import cors from "cors"
// import router from "./routes";
import router from "./routes/index.js"

dotenv.config();

const port = process.env.PORT || 4001;
const server = express();

server.use(json());
server.use(cors());
server.use(router)

server.listen(port, ()=>{console.log(`server running on port: ${port}`)});
