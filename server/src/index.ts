import dotenv from "dotenv";
import express, { Request, Response,Application } from "express";
import { connectDB } from "./config/connectDB";
import errorHandler from "./middleware/errorHandler";
import applyMiddleware from "./middleware/middlewares";
dotenv.config();
const app : Application  = express();

//database connection
connectDB();

//apply middleware configuration
applyMiddleware(app)

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello Word",
  });
});

//error handling
errorHandler(app)

app.listen(8080, () => {
  console.log("listening on port http://loaclhost:8080");
});
