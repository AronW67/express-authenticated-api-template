import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

/**
 * A function to provide a JWT access token for a user
 * @req the request object
 * @res the response object
 */
const getToken = (_: Request, res: Response) => {
    const accessToken = jwt.sign({}, process.env.ACCESS_TOKEN_SECRET as string);
    return res.json({accessToken: accessToken});
};

export { getToken };