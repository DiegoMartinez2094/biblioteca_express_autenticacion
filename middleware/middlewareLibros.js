import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {storageLibros} from '../controller/storageLibros.js'
import {validate} from 'class-validator';

const appMiddlewareLibros = express();

appMiddlewareLibros.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storageLibros, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export default appMiddlewareLibros;