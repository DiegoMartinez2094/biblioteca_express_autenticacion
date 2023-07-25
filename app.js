import dotenv from 'dotenv'
import express from "express";

import appLibros from './routers/libros.js';

dotenv.config();
const appExpress = express();

appExpress.use(express.json());


appExpress.use("/libros", appLibros);

const config = JSON.parse(process.env.MY_SERVER);
appExpress.listen(config, ()=>{
  console.log(`http://${config.hostname}:${config.port}`);
})