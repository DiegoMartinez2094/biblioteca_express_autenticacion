import appMiddlewareLibros from "../middleware/middlewareLibros.js";
import {Router} from 'express';
const appLibros = Router();

appLibros.post("/", appMiddlewareLibros, (req,res)=>{
    console.log(req.body.guardar);
    res.send("ddd")
});

export default appLibros;