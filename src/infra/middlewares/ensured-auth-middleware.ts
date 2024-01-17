import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

export class EnsuredAuthMiddleware {
  static handler(req: Request, res: Response, next: NextFunction) {
    const { headers } = req

    if (!headers?.authorization) {
      return res.status(401).json({ message: "Unauthorized" })
    }

    // Bearer token
    const token = headers?.authorization.replace("Bearer ", "")

    try {
      jwt.verify(token, process.env.TOKEN as string)

      const payload = jwt.decode(token) as { id: string }
      req.id = payload.id

    } catch (err) {
      return res.status(401).json({ message: "Invalid token" })
    }

    next()
  }
}



// rota -> EnsuredAuthMiddleware -> controller