import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    description: String,
    points: Number,
    dueDate: String,
    availableFrom: String,
    availableUntil: String,
    submissionType: String,
    course: { type: String, ref: "CourseModel" }, // Foreign key to Course
  },
  { collection: "assignments" }
);

export default schema;