import { Router, Request, Response } from "express";
import { sanitizeBody } from "express-validator/filter";
import { body, validationResult } from "express-validator/check";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  res.send("Hello Inventory");

  // console.log(req);
  console.log(req.body);
});

export default router;
