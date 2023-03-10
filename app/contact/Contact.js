import { Schema, model } from "mongoose";
// Schema for the contacts
// schema is a blueprint for the data

export default model(
  "Contacts",
  new Schema({
    fullName: { type: String, required: true },
    userName: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, "Username already exists"],
      minLength: [3, "Username must be at least 3 characters long"],
      maxLength: [20, "Username must be at most 20 characters long"],
    },
    phrase: { type: String, required: false },
    avatar: { type: String, required: false },
    id: { type: String, required: true },
  })
);
