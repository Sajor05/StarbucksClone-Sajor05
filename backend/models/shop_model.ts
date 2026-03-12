import mongoose from "mongoose";

const storesSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  opening: {
    type: Number,
  },
  closure: {
    type: Number,
  },
  isDelivery: {
    type: Boolean,
  },
});

export default mongoose.model("Stores", storesSchema);
