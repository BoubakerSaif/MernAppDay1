import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
  {
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Todo", todoSchema);
