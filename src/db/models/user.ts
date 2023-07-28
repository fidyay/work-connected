import mongoose, { Schema, model, Types } from "mongoose";
import crypto from "crypto";

interface User {
  names: string;
  hash: string;
  salt: string;
  organization: Types.ObjectId;
  roles: Types.ObjectId[];
  setPassword: (password: string) => void;
  validPassword: (password: string) => boolean;
}

const userSchema = new Schema<User>({
  names: String,
  hash: String,
  salt: String,
  organization: { type: Schema.Types.ObjectId, ref: "Organization" },
  roles: [{ type: Schema.Types.ObjectId, ref: "Role" }],
});

// Method to set salt and hash the password for a user
userSchema.methods.setPassword = function (password: string) {
  // Creating a unique salt for a particular user
  this.salt = crypto.randomBytes(16).toString("hex");
  // Hashing user's salt and password with 1000 iterations,
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`);
};

// Method to check the entered password is correct or not
userSchema.methods.validPassword = function (password: string) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`);
  return this.hash === hash;
};

const userModel = mongoose.models.User || model<User>("User", userSchema);

export default userModel;
