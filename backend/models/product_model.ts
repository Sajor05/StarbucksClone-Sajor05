import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  section: {
    type: String,
  },
  price: {
    type: Number,
  },
  currentItemCount: {
    type: Number,
  },
});

export default mongoose.model("Product", productSchema);
