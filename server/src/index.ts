import express, { Application } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app: Application = express();

dotenv.config({ path: "../.env" });

//Add Routes
import index from "./routes/index";
import inventory from "./routes/inventory";
import form from "./routes/form";
import payment from "./routes/payment";

//Database
mongoose.connect(
  `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@jackspeppers-zjn8z.mongodb.net/JacksPeppers?retryWrites=true&w=majority`,
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
app.use(cors());

//Implement Routes
app.use("/", index);
app.use("/product", index);
app.use("/api/inventory", inventory);
app.use("/api/form", form);
app.use("/api/payment", payment);

//Listener
app.listen(5000, () => {
  console.log("Server live at port 5000");
});
