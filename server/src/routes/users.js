import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("user: hello world");
});

export default router;
