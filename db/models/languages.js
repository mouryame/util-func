import mongoose, { Schema } from "mongoose";

const LanguageSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
  },
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const languages =
  mongoose.models.Language || mongoose.model("Language", LanguageSchema);
export default languages;
