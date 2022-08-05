import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { NextFunction } from 'connect';
import dotenv from "dotenv";

dotenv.config();

// generate authorization header
function auth(token: string){
    return jwt.sign(token, process.env.AUTH)
} 

export function requireAuth(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers);
    if (!req.headers || !req.headers.auth){
        return res.status(500).send({
            status: "failed",
            message: 'No authorization header.' 
        });
    }

    const token: string = req.headers.auth as string;

    return jwt.verify(token, process.env.AUTH, (err, decoded)=>{
        if(err) return res.status(500).send({
            status: "failed",
            message: 'Failed to authenticate' 
        });

        return next();
    })
}