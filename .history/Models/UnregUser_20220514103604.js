import mongoose from "mongoose";
import validator from 'validator';

const UnregUserSchema = new mongoose.Schema(
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
    jobTitle: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      maxlength: 60,
      validate: [validator.isEmail, "Please enter a valid email address"],
    },
    phoneNumber: {
        type: String,
        validate: {
            validator: function(v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`,
        },
    },
    streetAdress: {
      type: String,
      maxlength: 60,
    },
    city: {
      type: String,
      maxlength: 20,
    },
    state: {
      type: String,
      maxlength: 15,
    },
    zipCode: {
      type: String,
      maxlength: 5,
    },
    password: {
      type: String,
      maxlength: 60,
    },
    role: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    }
  },
  { timestamps: true }
);

export default mongoose.models.UnregUser || mongoose.model("UnregUser", UnregUserSchema);
