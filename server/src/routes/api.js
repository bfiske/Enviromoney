import express from "express";

let router = express.Router();

import userRouter from "../models/User";

router.get("/", (req, res, next) => {
  res.response("hello world");
});
router.use("/users", userRouter);
