// src/index.ts
import express from "express";
import { groceryRoutes, userRoutes } from "./routes";

const PORT = 5800;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);
app.use("/grocery", groceryRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
