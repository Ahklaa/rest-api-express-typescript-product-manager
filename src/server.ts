import express from "express";
import productRouter from "./router"
import db from './config/db'
const server = express();

server.use(express.json())

server.use('/api/products',productRouter)

async function connectionDB(){
    try{
        await db.authenticate()
        db.sync() //update database
        console.log("Conexion exitosa a la base de datos ");
    }catch(e){
        console.log(e);
        console.log("Hubo un error de conexion en la base de datos");
        
    }
}
connectionDB()
export default server;