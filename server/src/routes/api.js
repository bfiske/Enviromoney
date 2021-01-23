import express from "express";
import userRouter from "../routes/users";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.response("hello world");
});
router.use("/users", userRouter);

export default router;
