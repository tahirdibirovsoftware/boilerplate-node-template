import jwt from 'jsonwebtoken';
import { IUser } from '../models/user.model';

type JwtData = Pick<IUser, 'username' | 'role'>

class JwtService {


    generateAccessToken(userData: JwtData): string {
        return jwt.sign(userData, process.env.ACCESS_TOKEN_EXPIRES, { expiresIn: process.env.ACCESS_TOKEN_EXPIRES })
    }
    generateRefreshToken(userData: JwtData): string {
        return jwt.sign(userData, process.env.ACCESS_TOKEN_EXPIRES, { expiresIn: process.env.ACCESS_TOKEN_EXPIRES })
    }

}

export default new JwtService();