import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"

export const validateRequestBody =(schema: AnyZodObject)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        try {
            await schema.parseAsync(req.body);
            console.log("request body is valid");
            next();
        } catch (error) {
            res.status(400).json({
                message: "Invalid request body",
                success: false,
                error: error
            })
        }
    }
}