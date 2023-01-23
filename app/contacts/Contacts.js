import { Schema, model } from "mongoose";
// scehma for the contacts
// schema is a blueprint for the data

export default model(
  "Contacts",
  new Schema({
    fullName: { type: String, required: true },
    userName: { type: String, required: true },
    phrase: { type: String, required: false },
    avatar: { type: String, required: false },
    id: { type: String, required: true },
  })
);
