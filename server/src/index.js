import express from "express";
import * as dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import mongoose from "mongoose";
import session from "express-session";
import cors from "cors";

let apiRouter = require("./routes/api");
const app = express();

// MongoDB
mongoose.connect(process.env.MONGO_DB || "", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// api entry point
app.use("/api", apiRouter);

app.listen(process.env.PORT || 8080);
