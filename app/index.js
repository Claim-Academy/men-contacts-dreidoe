import express from "express";

import contactsRouter from "./student/routes.js";

const app = express();

// * This is a middleware
// Tell express to parse the request body as JSON
// Without this, req.body will be undefined
app.use(express.json());

// this is a middleware
// any request that starts with /api/students will be handled by studentRoutes
app.use("/api/students/", contactsRouter);

app.listen(3000, () => {
  console.info("Server is running on port 3000");
});
