import mongoose from "mongoose";

const PortfolioProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
    },
    link: {
      type: String,
      required: [true, 'Blog author is required'],
    },
    desc: {
      type: String,
      required: [true, 'Blog body is required'],
    },
    visits: {
      type: Number,
      min: 0,
      required: [true, 'Blog body is required'],
    },
  },
  { timestamps: true }
);

export default mongoose.models.PortfolioProject || mongoose.model("PortfolioProject", PortfolioProjectSchema);
