import express, { Application } from "express";

const app: Application = express();

import index from "./routes/index";
import inventory from "./routes/inventory";

app.use("/", index);
app.use("/inventory", inventory);

app.listen(5000, () => {
  console.log("Server live at port 5000");
});
