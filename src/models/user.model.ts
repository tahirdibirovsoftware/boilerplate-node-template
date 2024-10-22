import mongoose, { Document, mongo, Schema } from 'mongoose';

export type UserRole = 'admin' | 'user';

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    role: UserRole
}

export type CreateUserDto = Omit<IUser, "role">
export type LoginUserDto =
    | { username: string; password: string; email?: undefined }
    | { email: string; password: string; username?: undefined };

const UserSchema: Schema<IUser> = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });


export const User = mongoose.model<IUser>('User', UserSchema);