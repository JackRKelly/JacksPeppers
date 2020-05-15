import express, { Application } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app: Application = express();

//Add Routes
import index from "./routes/index";
import inventory from "./routes/inventory";
import form from "./routes/form";

//Database
dotenv.config({ path: "../.env" });

mongoose.connect(
  `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@jackspeppers-zjn8z.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to database");
});

//Middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//Implement Routes
app.use("/", index);
app.use("/api/inventory", inventory);
app.use("/api/form", form);

app.listen(5000, () => {
  console.log("Server live at port 5000");
});
