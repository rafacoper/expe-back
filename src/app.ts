// src/index.ts
import express, { Request, Response} from "express";
import { userRoutes } from "./routes";

const PORT = 5800;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/check", (_req: Request, res: Response) => res.send("server up"));

app.use("/user", userRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
