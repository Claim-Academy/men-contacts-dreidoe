import { Router } from "express";
import controller from "./controller.js";

const router = new Router();
// this will handle http GET requests to /contacts
router.get("/", (_, response) => {
  controller
    .index()
    .then((contacts) => {
      response.json(contacts);
    })
    .catch((err) => {
      response.status(500).json(err);
    });
});

router.get("/:id", async (request, response) => {
  const { id } = request.params;

  const contact = await controller.show(id).catch((err) => {
    // If the reason for the rejected Promise is an invalid ID, then...
    if (err.message === "Invalid ID") {
      // ...return a 400 Bad Request status code.
      return response.status(400).json({ message: "Invalid ID" });
    }

    response.status(500).json(err);
  });

  if (contact) {
    response.json(contact);
  } else {
    response.status(404).json({ message: "Contact not found" });
  }
});
// TODO: write a route to update a contact
router.put("/:id", async (request, response) => {
  const { id } = request.params;
  const updatedContact = await controller
    .update(id, request.body)
    .catch((err) => {
      if (err.message === "Invalid ID") {
        if (updatedContact) {
          response.json(updatedContact);
        } else {
          response.status(404).json({ message: "Contact not found" });
        }
      }
    });
});

router.delete("/:id", async (request, response) => {
  const { id } = request.params;
  const deletedContact = await controller
    .delete(id, request.body)
    .catch((err) => {
      if (err.message === "Invalid ID") {
        if (deletedContact) {
          response.json(deletedContact);
        } else {
          response.status(404).json({ message: "Contact not found" });
        }
      }
    });
});

export default router;
