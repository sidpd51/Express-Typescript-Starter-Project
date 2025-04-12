import { Request,Response } from "express";
 
export const pingHandler= (req: Request, res: Response) => {
    console.log("inside ping controller")
    res.send("pong");
}