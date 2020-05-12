import { Router, Request, Response } from "express";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (name.length === 0) {
    res.status(400).send({ error: ["Name cannot be left blank", "", ""] });
  }

  // let testAccount = await mailer.createTestAccount();

  // let transporter = mailer.createTransport({
  //   service: "Gmail",
  //   auth: {
  //     user: testAccount.user,
  //     pass: testAccount.pass,
  //   },
  // });

  // let info = await transporter.sendMail({
  //   from: '"Jacks Peppers" <foo@example.com>',
  //   to: "test@gmail.com",
  //   subject: "Jacks Peppers Form",
  //   text: `Name: ${name}, Email: ${email}, Message: ${message}`,
  //   html: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`,
  // });

  console.log(req.body);
  res
    .status(200)
    .send({ error: ["", "", ""], message: "Form successfully submitted" });
});

export default router;
