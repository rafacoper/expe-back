// src/index.ts
import express from "express";
import { userRoutes } from "./routes";

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/api/users", userRoutes);

const PORT = 5800;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
