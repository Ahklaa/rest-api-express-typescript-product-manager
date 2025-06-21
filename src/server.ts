import express from "express";
import productRouter from "./router"
import db from './config/db'
import colors from 'colors'
const server = express();

//leer datos de formulario
server.use(express.json())

server.use('/api/products',productRouter)

async function connectionDB(){
    try{
        await db.authenticate()
        db.sync() //update database
        console.log(colors.magenta.bold("Conexion exitosa a la base de datos "));
    }catch(e){
        console.log(e);
        console.log(colors.red.bold("Hubo un error de conexion en la base de datos"));
        
    }
}
connectionDB()
export default server;