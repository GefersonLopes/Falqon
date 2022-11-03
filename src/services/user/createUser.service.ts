import { AppDataSource } from "../../data-source";
import { User } from "../../entities/userEntity.entity";
import { AppError } from "../../Errors/AppError";
import { IRequestUser, IResponseUser } from "../../interfaces/user";
import bcrypt from "bcryptjs";

export const createUser_Service = async ({
    email,
    password
}: IRequestUser): Promise<IResponseUser> => {
    
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
        where: { email: email},
    });

    if(user) {
        throw new AppError(406, "user already exists");
    };
    if (!email || !password) {
        throw new AppError(400, "name, email and password is required");
    }
    if (email.length === 0 || password.length === 0) {
        throw new AppError(400, "name, email and password is required");
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User();
    newUser.email = email;
    newUser.password = hashedPassword;

    await userRepository.save(newUser);
    userRepository.create(newUser);

    return newUser;
};
