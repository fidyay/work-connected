import mongoose, { Schema, model, Types } from "mongoose";

interface Organization {
  name: string;
  users: Types.ObjectId[];
  roles: Types.ObjectId[];
  chats: Types.ObjectId[][];
}

const organizationSchema = new Schema<Organization>({
  name: { type: String, unique: true },
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  chats: [{ type: Schema.Types.ObjectId, ref: "Chat" }],
  roles: [{ type: Schema.Types.ObjectId, ref: "Role" }],
});

const organizationModel =
  mongoose.models.Organization ||
  model<Organization>("Organization", organizationSchema);

export default organizationModel;
