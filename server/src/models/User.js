import mongoose, { Schema } from "mongoose";

let UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  bankAccount: { type: Number, required: true },
  phoneNumber: { type: Number, required: true },
});

UserSchema.virtual("url").get(function () {
  return "/users/" + this._id;
});

export default mongoose.model("User", UserSchema);
