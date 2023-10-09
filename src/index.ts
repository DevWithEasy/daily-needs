import express, { Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config()
const app = express();


app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello Word",
  });
});
app.listen(8080, () => {
  console.log("listening on port http://loaclhost:8080");
});
