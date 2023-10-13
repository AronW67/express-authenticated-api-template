import { User } from '@prisma/client';
import prisma from '../db/prisma.client';

/**
 * User input interface to extend user and omit autoincremented id
 */
export interface UserInput extends Omit<User, 'id'> {};

/**
 * Get all users
 * @returns a list of Users
 */
const getUserService = async (): Promise<User[]> => {
    return await prisma.user.findMany();
};

/**
 * Create a User
 * @param user the user data of type {@link UserInput}
 */
const createUserService = async (user: UserInput) => {
    return prisma.user.create({data: user});
}

export { getUserService, createUserService };