import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { connectDB } from "./config/connectDB";
dotenv.config();
const app = express();

//database connection
connectDB();

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello Word",
  });
});
app.listen(8080, () => {
  console.log("listening on port http://loaclhost:8080");
});
