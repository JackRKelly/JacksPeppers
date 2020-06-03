import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  message: String,
});

export const Form = mongoose.model("Form", formSchema);
