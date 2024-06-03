import express from "express";
// Fix para obtener el valor de __dirname en módulos ES6
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import {methods as authentication} from "./controllers/authentication.controllers.js"

//Server
const app = express();
app.set("port",4000);
app.listen(app.get("port"));
console.log("servidor escuchando en puerto", app.get("port"));

//configuracion
app.use(express.static(__dirname + "/public"));
app.use(express.json());


//Rutas
app.get("/",(req,res)=> res.sendFile(__dirname + "/pages/login.html"));
app.get("/register",(req,res)=> res.sendFile(__dirname + "/pages/register.html"));
app.get("/admin",(req,res)=> res.sendFile(__dirname + "/pages/admin/admin.html"));
app.post("/api/login",authentication.login);
app.post("/api/register",authentication.register);

