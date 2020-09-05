import mongoose from "mongoose";
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: { type: String },
  gender: { type: String, default: "male" },
  phone: { type: Number, default: null },
  address: { type: String, default: null },
  avatar: { type: String, default: "avatar-default.jpg" },
  role: { type: String, default: "user" },
  local: {
    email: { type: String, trim: true },
    password: { type: String },
    isActive: { type: Boolean, default: false },
    verifyToken: { type: String },
  },
  facebook: {
    uid: { type: String },
    token: { type: String },
    email: { type: String, trim: true },
  },
  google: {
    uid: { type: String },
    token: { type: String },
    email: { type: String, trim: true },
  },
  createAt: { type: String, default: Date.now },
  updateAt: { type: String, default: null },
  deleteAt: { type: String, default: null },
});
UserSchema.statics = {
  createNew(item) {
    return this.create(item);
  },
  findByEmail(email) {
    return this.findOne({ "local.email": email }).exec();
  },
  removeById(id) {
    return this.findByIdAndRemove(id).exec();
  }
};

module.exports = mongoose.model("user", UserSchema)
