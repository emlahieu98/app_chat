import mongoose from "mongoose";
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
  sender: {
    id: { type: String },
    username: { type: String },
    avatar: { type: String },
  },
  receiver: {
    id: { type: String },
    username: { type: String },
    avatar: { type: String },
  },
  text: { type: String },
  file:{ data: Buffer, contentType: String, filename: String  },
  createAt: { type: Number, default: Date.now },
  updateAt: { type: Number, default: null },
  deleteAt: { type: Number, default: null },
});
module.exports = mongoose.model("message", MessageSchema);
