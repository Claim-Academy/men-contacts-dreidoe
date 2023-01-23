import config from "../config.js";
import mongoose from "mongoose";
import Contacts from "./Contacts.js";

// connect to the database
mongoose
  .connect(config.getDbConn("contacts"))
  .then(() => {
    console.info("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

export default {
  getStudents() {
    return Contacts.find();
  },
};
