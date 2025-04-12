import express, { NextFunction, Request, Response } from 'express'
import { pingController } from '../controllers/ping.controller'

const pingRouter = express.Router();

function middleware1(req: Request, res: Response, next: NextFunction) {
    console.log("middleware 1");
    next()
    console.log("middleware 1 end");
}

function middleware2(req: Request, res: Response, next: NextFunction) {
    console.log("middleware 2");
    next()
    console.log("middleware 2 end");
}

pingRouter.get('/ping', middleware1, middleware2, pingController);

export default pingRouter;