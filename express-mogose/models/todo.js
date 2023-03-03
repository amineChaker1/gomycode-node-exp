import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todos", todoSchema);
export default Todo;
