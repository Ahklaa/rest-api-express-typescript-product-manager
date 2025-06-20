import express from "express";
import productRouter from "./router"
const server = express();

server.use(express.json())

server.use('/api/products',productRouter)


export default server;