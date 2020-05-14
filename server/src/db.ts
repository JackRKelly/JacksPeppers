import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

mongoose.connect(
  `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@jackspeppers-zjn8z.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
