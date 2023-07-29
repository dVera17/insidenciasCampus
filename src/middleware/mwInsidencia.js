import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Insidencia } from '../../dist/Insidencia.js';
import { validate } from 'class-validator';
const middlewareInsidencia = express();

middlewareInsidencia.use(async(req,res,next)=>{
    try {
        let data = plainToClass(Insidencia, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export default middlewareInsidencia;