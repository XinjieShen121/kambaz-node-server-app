// import Database from "../Database/index.js";
// import { v4 as uuidv4 } from "uuid";

// export function findAssignmentsForCourse(courseId) {
//   return Database.assignments.filter((a) => a.course === courseId);
// }

// export function createAssignment(courseId, assignment) {
//   const newAssignment = { ...assignment, _id: uuidv4(), course: courseId };
//   Database.assignments.push(newAssignment);
//   return newAssignment;
// }

// export function updateAssignment(id, updates) {
//   const assignment = Database.assignments.find((a) => a._id === id);
//   Object.assign(assignment, updates);
//   return assignment;
// }

// export function deleteAssignment(id) {
//   Database.assignments = Database.assignments.filter((a) => a._id !== id);
//   return { status: "deleted" };
// }



// src/server/Assignments/dao.js
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

//  Find assignments for a specific course
export const findAssignmentsForCourse = async (courseId) => {
  return await model.find({ course: courseId });
};

//  Create a new assignment and link to a course
export const createAssignment = async (courseId, assignment) => {
  const newAssignment = {
    ...assignment,
    _id: uuidv4(),
    course: courseId,
  };
  return await model.create(newAssignment);
};

//  Update assignment by ID
export const updateAssignment = async (id, updates) => {
  return await model.updateOne({ _id: id }, { $set: updates });
};

//  Delete assignment by ID
export const deleteAssignment = async (id) => {
  return await model.deleteOne({ _id: id });
};
