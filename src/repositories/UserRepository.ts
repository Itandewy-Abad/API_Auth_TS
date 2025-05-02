import { UserModel } from '../models/User';
import { UserInterface } from '../interfaces/UserInterface';

export class UserRepository {
    async create() {
        return await new UserModel().save();
    }
    async findByEmail(email: string) {
        return await UserModel.findOne({email});

    }
}