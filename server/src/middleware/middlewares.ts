import cors from 'cors';
import express, { Application } from 'express';
import morgan from 'morgan';

const middlewares = [
    express.urlencoded({extended: true}),
    express.json(),
    cors(),
    morgan('dev'),
]

const applyMiddleware=(app : Application)=>{
    middlewares.map(m=>app.use(m))
}

export default applyMiddleware