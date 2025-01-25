import express from "express";
import userrouter from "./routes/userroutes.js"
import connection from './model/index.js'
const app = express();
app.use(express.json());


app.use("/user",userrouter)
app.listen(8000, async () => {
  try {
    await connection.authenticate();
    connection.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
