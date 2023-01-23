import { Schema, model } from "mongoose";

export default model(
  "Contacts",
  new Schema({
    fullName: String,
    userName: String,
    phrase: String,
    avatar: String,
    id: String,
  })
);
