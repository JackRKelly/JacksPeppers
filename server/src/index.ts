import express, { Application, Router } from "express";

const app: Application = express();

import index from "./routes/index";

app.use("/", index);

app.listen(5000, () => {
  console.log("Server live at port 5000");
});
