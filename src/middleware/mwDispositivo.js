import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Dispositivo } from '../../dist/Dispositivo.js';
import { validate } from 'class-validator';
const middlewareDispositivo = express();

middlewareDispositivo.use(async(req,res,next)=>{
    try {
        let data = plainToClass(Dispositivo, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export default middlewareDispositivo;