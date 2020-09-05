import mongoose from "mongoose";
const Schema = mongoose.Schema;
const NotificationSchema = new Schema({
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
  type: { type: String },
  content: { type: String },
  isRead:{type: Boolean, default: false},
  createAt: { type: Number, default: Date.now },
});
module.exports = mongoose.model("notification", NotificationSchema);
