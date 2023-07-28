import mongoose, { Schema, model, Types } from "mongoose";

interface ChatActions {
  chatId: Types.ObjectId;
  writingMessages: boolean;
  deletingChat: boolean;
}

const chatActionsSchema = new Schema<ChatActions>({
  chatId: { type: Schema.Types.ObjectId, ref: "Chat" },
  writingMessages: Boolean,
  deletingChat: Boolean,
});

interface Role {
  name: string;
  controledBy: Types.ObjectId;
  organization: Types.ObjectId;
  chatActions: ChatActions[];
}

const roleSchema = new Schema<Role>({
  name: String,
  organization: { type: Schema.Types.ObjectId, ref: "Organization" },
  controledBy: { type: Schema.Types.ObjectId, ref: "Role" },
  chatActions: [chatActionsSchema],
});

const roleModel = mongoose.models.Role || model<Role>("Role", roleSchema);

export default roleModel;
