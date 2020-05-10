import { Router, Request, Response } from "express";
import fs from "fs";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.type("html");
  fs.readFile("../../client/build/index.html", (err, data: Buffer) => {
    console.log(err);
    res.send(data);
  });
});

export default router;
