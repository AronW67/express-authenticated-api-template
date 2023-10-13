import { Request, Response } from 'express';
import { UserInput, createUserService, getUserService } from '../services/user.service';

/**
 * User controller method to get all users
 * @param req the request
 * @param res the response
 * @returns a response with status and message
 */
const getUsers = async (_: Request, res: Response) => {
    const users = await getUserService();
    return res.json(users);
};

/**
 * User controller method to create a user 
 * @param req a User sent in the request
 * @param res the response
 */
const createUser = async (req: Request<UserInput>, res: Response) => {
    try {
        const user = req.body;
        const createdUser = await createUserService(user);
        return res.status(200).json(createdUser);
      } catch (e) {
        return res.status(400).json({ error: 'Failed to create user' });
    }
}

export { getUsers, createUser };