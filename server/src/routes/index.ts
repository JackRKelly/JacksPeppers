import { Router, Request, Response } from "express";
import fs from "fs";
import path from "path";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.type("html");
  fs.readFile("../../client/build/index.html", (err, data: Buffer) => {
    res.send(data);
  });
});

router.get("/static/:folder/:filename", (req: Request, res: Response) => {
  const { folder, filename } = req.params;

  fs.readFile(
    `../../client/build/static/${folder}/${filename}`,
    (err, data: Buffer) => {
      if (folder === "media") {
      } else {
        res.type(folder);
      }
      res.send(data);
    }
  );
});

export default router;
