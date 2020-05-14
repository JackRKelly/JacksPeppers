import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
  "mongodb+srv://admin:<password>@jackspeppers-zjn8z.mongodb.net/test?retryWrites=true&w=majority"
);
