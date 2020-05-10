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

router.get("/:file", (req: Request, res: Response) => {
  const { file } = req.params;
  const extension = path.extname(file);

  if (extension) {
    res.type(extension);
    fs.readFile(`../../client/build/${file}`, (err, data: Buffer) => {
      res.send(data);
    });
  } else {
    res.type("html");
    fs.readFile("../../client/build/index.html", (err, data: Buffer) => {
      res.send(data);
    });
  }
});

export default router;
