import mongoose from "mongoose";
import validator from 'validator';

const DealSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'User first name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'User last name is required'],
    },
    organization: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      maxlength: 60,
      validate: [validator.isEmail, "Please enter a valid email address"],
      required: [true, 'User email is required'],
    },
    devCosts: {
        type: String,
        required: true,
    },
    monthlyCosts: {
        type: String,
        required: true,
    },
    projectManager: {
        type: String,
        required: true,
    },
    projectName: {
        type: String,
        required: true,
    },
    devStatus: {
        type: String,
        required: true,
    },
    productionStage: {
        type: String,
        required: true,
    },
    projectDetails: {
        type: String,
        required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.models.Deal || mongoose.model("Deal", DealSchema);
