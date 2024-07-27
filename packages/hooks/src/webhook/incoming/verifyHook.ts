import { Request, Response, NextFunction } from "express";

export function verifyHook(req: Request, res:Response, next:NextFunction) {
    const apiKey = req.headers['x-api-key'];

    if(!apiKey || apiKey !== process.env.WEBHOOK_API_KEY) {
        return res.status(401).json({ message: "Unauthorized"})
    }

    next();
}