import mongoose, { Schema, model, Types } from "mongoose";

interface Message extends mongoose.Document {
  replyTo: Types.ObjectId;
  text: string;
  user: Types.ObjectId;
}

const messageSchema = new Schema<Message>({
  replyTo: { type: Schema.Types.ObjectId, ref: "Chat.messages" },
  text: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

interface Chat {
  name: string;
  roles: Types.ObjectId[];
  organization: Types.ObjectId;
  messages: Message[];
}

const chatSchema = new Schema<Chat>({
  name: String,
  organization: { type: Schema.Types.ObjectId, ref: "Organization" },
  roles: [{ type: Schema.Types.ObjectId, ref: "Role" }],
  messages: [messageSchema],
});

const chatModel = mongoose.models.Chat || model<Chat>("Chat", chatSchema);

export default chatModel;
