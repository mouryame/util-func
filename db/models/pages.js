import mongoose, { Schema } from "mongoose";

const PageSchema = new Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    languageId: { type: Number, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const pages = mongoose.models?.Page || mongoose.model("Page", PageSchema);
export default pages;
