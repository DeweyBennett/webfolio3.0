import mongoose from "mongoose";


const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
    },
    author: {
      type: String,
      required: [true, 'Blog author is required'],
    },
    sect1_head: {
      type: String,
    },
    sect1_body: {
      type: String,
      required: [true, 'Blog body is required'],
    },
    sect2_head: {
      type: String,
    },
    sect2_body: {
      type: String,
    },
    sect3_head: {
      type: String,
    },
    sect3_body: {
      type: String,
    },
    sect4_head: {
      type: String,
    },
    sect4_body: {
      type: String,
    },
    sect5_head: {
      type: String,
    },
    sect5_body: {
      type: String,
    },
    sect6_head: {
      type: String,
    },
    sect6_body: {
      type: String,
    },
    sect7_head: {
      type: String,
    },
    sect7_body: {
      type: String,
    },
    sect8_head: {
      type: String,
    },
    sect9_body: {
      type: String,
    },
    sect10_head: {
      type: String,
    },
    sect10_body: {
      type: String,
    },
    tags: {
        type: [String],
        required: [true, 'Blog tags are required'],
    },
    visits: {
      type: Number,
      min: 0,
      required: [true, 'Blog body is required'],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
