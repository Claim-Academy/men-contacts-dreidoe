import mongoose from "mongoose";
import config from "../config.js";
import Contact from "./Contact.js";

// Connect to the database
mongoose
  .connect(config.getDbConn("contacts"))
  .then(() => {
    console.info("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database", err.message);
  });

export default {
  // Get all contacts
  index() {
    return Contact.find();
  },

  show(id) {
    if (mongoose.Types.ObjectId.isValid(id)) {
      return Contact.findById(id);
    }

    // Wrap the error in a rejected promise so that it can be CAUGHT.
    return Promise.reject(new Error("Invalid ID"));
  },
};
