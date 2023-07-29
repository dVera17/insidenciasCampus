import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Trainer } from '../../dist/Trainer.js';
import { validate } from 'class-validator';
const middlewareTrainer = express();

middlewareTrainer.use(async(req,res,next)=>{
    try {
        let data = plainToClass(Trainer, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export default middlewareTrainer;