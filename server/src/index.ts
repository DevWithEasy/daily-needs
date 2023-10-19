import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import express, { Application } from "express";
import { connectDB } from "./config/connectDB";
import errorHandler from "./middleware/errorHandler";
import applyMiddleware from "./middleware/middlewares";
import applyRouter from "./routes/routes";
dotenv.config();

const app: Application = express();

//cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

//database connection
connectDB();

//apply middleware configuration
applyMiddleware(app);

//apply routes
applyRouter(app);

//error handling
errorHandler(app);

app.listen(8080, () => {
  console.log("listening on port http://loaclhost:8080");
});
