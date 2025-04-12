import { Request,Response } from "express";
 
export const pingController= (req: Request, res: Response) => {
    console.log("inside ping controller")
    res.send("pong");
}