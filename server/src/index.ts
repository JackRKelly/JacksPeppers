import express, { Application } from "express";
import bodyParser from "body-parser";

const app: Application = express();

//Add Routes
import index from "./routes/index";
import inventory from "./routes/inventory";
import form from "./routes/form";

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
