import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export const AuthController = {
	async signin(req: Request, res: Response) {
		try {
			const user = await AuthService.login(req.body);

			if (!user) {
				return res.render("login", {
					error: "Incorrect email / password.",
				});
			}

		auth.createUserSession(req, res, user);
		res.redirect("/grocery");
		} catch (error) {
		res.render("login", {
				error: error.message,
		});
		}
},