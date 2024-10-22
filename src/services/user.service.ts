import { CreateUserDto, IUser, LoginUserDto } from '../models/user.model';



class UserService {

    async registerUser(userData: CreateUserDto): Promise<void> {
        const { email, username, password } = userData;
    }
    async loginUser(userData: LoginUserDto): Promise<void> {
        const { username, email, password } = userData;
        const userIdentifier = username || email;
    }
    async logoutUser(): Promise<void> { }

}


export default UserService;