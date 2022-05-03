import mongoose from "mongoose";
import validator from 'validator';

const CFMessageSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'User first name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'User last name is required'],
    },
    email: {
      type: String,
      unique: true,
      maxlength: 60,
      validate: [validator.isEmail, "Please enter a valid email address"],
      required: [true, 'User email is required'],
    },
    message: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.CFMessage || mongoose.model("CFMessage", CFMessageSchema);
