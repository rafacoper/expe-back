import express from 'express';
import { Client } from 'pg';

const app = express();

const client = new Client({
  user: "postgres",
  host: process.env.HOST,
  database: process.env.POSTGRES_DB,
  password: "Welcome",
  port: Number(process.env.PORT),
});


app.get('/api/users', async (req, res) => {
  try {
    await client.connect();
    const result = await client.query('SELECT $1::text as message', ['Hello world!']);
    console.log(result.rows[0].message)
  } catch (error) {
    console.error(error);
  } finally {
    await client.end();
  }
});

const PORT = 5800;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
