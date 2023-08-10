import "dotenv/config";
import { Pool } from "pg";

//  Quando o pool de conexões recebe requisição
// para o mesmo database e mesmo usuário, ele não irá
// criar uma nova conexão, e sim utilizar uma conexão
// já aberta anteriormente.

export const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.PORT),
});
