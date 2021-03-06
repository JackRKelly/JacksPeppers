import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
  seedCount: Number,
  quantity: Number,
  heat: Number,
  image: String,
  colorList: [String],
  description: String,
});

export const Product = mongoose.model("Product", productSchema);
