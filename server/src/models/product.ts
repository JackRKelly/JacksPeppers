import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  price: Number,
  seedCount: Number,
  quantity: Number,
  heat: Number,
  image: String,
  colorList: [String],
  description: String,
});

export const product = mongoose.model("Product", productSchema);
