import { Router, Request, Response } from "express";
import { sanitizeBody } from "express-validator/filter";
import { body, validationResult } from "express-validator/check";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello Inventory");
  console.log(req);
});

export default router;
