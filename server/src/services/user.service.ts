import User, {IUser} from "#models/user.model.js";

class UserService {
    public async createUser  (userData : IUser) {
        //1. business logic: check user already exist or not
        const existingUser = await User.findOne({email : userData.email})

        if(existingUser){
            const error = new Error("User already exists");
            throw error
        }

        // 2. Data manipulation: create user
        const newUser = await User.create(userData);

        // 3. Other actions: Maybe send a welcome email via another service
        // await emailService.sendWelcomeEmail(newUser.email);
        return newUser
    }
}

export default new UserService();