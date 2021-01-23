import mongoose, { Schema } from "mongoose";

let UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

UserSchema.virtual("url").get(function (this) {
  return "/users/" + this._id;
});

export default mongoose.model("User", UserSchema);
