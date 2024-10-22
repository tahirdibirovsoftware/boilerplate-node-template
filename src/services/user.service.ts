import { CreateUserDto, IUser, LoginUserDto } from '../models/user.model';



class UserService {

    async registerUser(userData: CreateUserDto): Promise<void> {
        const { email, username, password } = userData;
        console.log(email, username, password);
    }
    async loginUser(userData: LoginUserDto): Promise<void> {
        const { username, email, password } = userData;
        const userIdentifier = username || email;
        console.log({ userIdentifier, password })
    }
    async logoutUser(): Promise<void> {
        console.log(`Logged out`);
    }

}


export default UserService;