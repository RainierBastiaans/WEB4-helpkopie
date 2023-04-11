import express, { Request, Response } from 'express';
import userService from '../service/user.service';

const userRouter = express.Router();

userRouter.get('/', (req: Request, res: Response) => {
    try {
        const users = userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ status: 'error', errorMessage: error.message });
    }
});