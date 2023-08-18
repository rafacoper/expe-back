import { compare } from "bcrypt";
import { UserService } from "../services";

export const AuthService = {
	async login(input: any): Promise<any> {
		const inputed = input.email
			? input.email
			: input.phone 
		const user = await UserService.getUser(inputed);
		if (!user) {
			throw new Error('User not found');
		}
		if (!compare(input.password, user.password)) {
      throw new Error('Password do not match');
    }
		
		const { id } = user;

		auth.createUserSession(id);
	}

	async register(input: any): Promise<any> {
}