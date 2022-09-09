import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200
  },
  isComplete: Boolean,
  date: {
    type: Date,
    default: new Date()
  }
})

// this is a class, need to be capital
export const Todo = mongoose.model('Todo', todoSchema)

