"use strict";
// import * as jwt from 'jsonwebtoken';
// import { Router, Request, Response } from 'express';
// import { NextFunction } from 'connect';
// import dotenv from "dotenv";
// dotenv.config();
// function auth(token: string){
//     jwt.sign()
// }
// export function requireAuth(req: Request, res: Response, next: NextFunction) {
//     if (!req.headers || !req.headers.authorization){
//         return res.status(401).send({ message: 'No authorization headers.' });
//     }
//     if (req.headers.authorization == process.env.auth){
//         return next();
//     }
//     else{
//         return res.status(500).send({ auth: false, message: 'Failed to authenticate.' });
//     }
// }
//# sourceMappingURL=auth.js.map