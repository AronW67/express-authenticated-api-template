import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../../src/db/prisma.client';

/**
 * A middleware function to handle authentication for requests
 * In the case of the token endpoint, authentication uses basic auth
 * Other endpoints verified by JWT token verification
 * @req the request object
 * @res the response object
 * @next the next function to call to process the request
 */
const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
    if (req.originalUrl === '/api/token') { // Basic auth for token endpoint
        const authHeader = req.get('Authorization');
        
        if (!authHeader) return res.sendStatus(401);
        
        var credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');

        var username = credentials[0];
        var password = credentials[1];

        const user = await prisma.user.findFirst({
            where: {
                name: username
            }
        })

        if (!user || user.password !== password) {
            return res.sendStatus(401);
        }

        next(); 
    } else { // JWT authentication for all other requests
        const token = req.get('jwt');

        if (!token) return res.sendStatus(401);

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err) => {
            if (err) return res.sendStatus(403);
            next();
        });
    }
}

export default authenticateToken;