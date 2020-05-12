import express, { Application } from "express";

const app: Application = express();

import index from "./routes/index";
import inventory from "./routes/inventory";
import form from "./routes/form";

app.use("/", index);
app.use("/api/inventory", inventory);
app.use("/api/form", form);

app.listen(5000, () => {
  console.log("Server live at port 5000");
});
