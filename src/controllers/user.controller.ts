import { Request, Response } from 'express';
import UserService from '../services/user.service';



class UserController {

    private readonly userService = new UserService();

    async registerUser(req: Request, res: Response) {
        await this.userService.registerUser(req.body);
    }

    async loginUser(req: Request, res: Response): Promise<void> {
        await this.userService.loginUser(req.body);
    }

    async logoutUser(): Promise<void> {
        await this.userService.logoutUser();
    }

}

export default UserController;