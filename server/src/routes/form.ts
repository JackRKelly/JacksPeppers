import { Router, Request, Response } from "express";
import { Form } from "../models/form";
import mongoose from "mongoose";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  let error = {
    error: false,
    list: ["", "", ""],
  };

  if (name.length === 0) {
    error.error = true;
    error.list[0] = "Name cannot be left blank.";
  }
  if (email.length === 0) {
    error.error = true;
    error.list[1] = "Email cannot be left blank.";
  } else if (!email.includes("@")) {
    error.error = true;
    error.list[1] = 'Email must contain an "@" symbol.';
  } else if (!email.includes(".")) {
    error.error = true;
    error.list[1] = "Email must contain a period.";
  }
  if (message.length === 0) {
    error.error = true;
    error.list[2] = "Message cannot be left blank.";
  }

  if (error.error) {
    res.status(400).send({ error: error.list });
  } else {
    const form = new Form({
      _id: new mongoose.Types.ObjectId(),
      name: name,
      email: email,
      message: message,
    });

    form
      .save()
      .then((result) => {
        if (result) {
          res.status(200).send({
            error: error.list,
            message: "Form successfully submitted",
          });
        } else {
          res.status(404).json({ message: "No entries found" });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err });
      });
  }
});

export default router;
