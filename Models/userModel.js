import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    age: { type: Number },
    profileImage: {
      type: String,
      default:
        "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
    },
    password: { type: String, required: true },
  },
  { timeStamps: true }
);

export default mongoose.model("User", userSchema);
