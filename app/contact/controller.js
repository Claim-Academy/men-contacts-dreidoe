import mongoose from "mongoose";
import config from "../config.js";
import Contact from "./Contact.js";
mongoose.set("strictQuery", false);
// Connect to the database
mongoose
  .connect(config.dbConn)
  .then(() => {
    console.info("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database", err.message);
  });

const contactController = {
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

  // TODO: write a method  to update a contact
  updateContact(id2Update, updatedContact) {
    if (mongoose.Types.ObjectId.isValid(id2Update)) {
      return Contact.findByIdAndUpdate(id2Update, updatedContact, {
        // by adding these validators you will be able to update only the fields that you want individually
        returnDocument: "after",
        returnValidators: true,
      });
    }
    return Promise.reject(new Error("Invalid ID"));
  },

  // TODO: write a method to delete a contact
  deleteContact(id2Delete) {
    if (mongoose.Types.ObjectId.isValid(id2Delete)) {
      return Contact.findByIdAndDelete;
    }
    return Promise.reject(new Error("Invalid ID"));
  },

  // TODO: write a method to show by username

  showByUserName(username) {
    return Contact.findOne({ username });
  },

  updateByUserName(username, updatedContact) {
    return Contact.updateOne({
      username,
      updatedContact,
      returnDocument: "after",
      returnValidators: true,
    });
  },

  deleteById(id2Delete) {
    if (mongoose.Types.ObjectId.isValid(id2Delete)) {
      return Contact.findByIdAndDelete(id2Delete);
    }
    return Promise.reject(new Error("Invalid ID"));
  },
  deleteByUserName(username) {
    return Contact.findOneAndDelete({ username });
  },
};
export default contactController;
