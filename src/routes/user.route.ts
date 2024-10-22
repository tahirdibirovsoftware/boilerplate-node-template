import { Router } from 'express';
import userController from '../controllers/user.controller';



const router = Router();


router.post('/register', userController.registerUser.bind(userController));
router.post('/login', userController.loginUser.bind(userController));
router.get('/logout', userController.logoutUser.bind(userController));

export { router };
