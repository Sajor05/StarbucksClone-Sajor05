import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    cart: {
      type: Array,
    },
    purchaseHistory: {
      type: Array,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("User", userSchema);
