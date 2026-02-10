import mongoose from "mongoose";

const itemSectionSchema = new mongoose.Schema(
  {
    section: { type: String, required: true },
    sectionTitle: { type: String, required: true },
  },
  { _id: false },
);

const subCategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    sections: [itemSectionSchema],
  },
  { _id: false },
);

const categorySchema = new mongoose.Schema(
  {
    section: { type: String, required: true },
    categorias: [subCategorySchema],
  },
  {
    versionKey: false,
  },
);

export default mongoose.model("Categories", categorySchema);
