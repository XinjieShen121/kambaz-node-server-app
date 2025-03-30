import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findAssignmentsForCourse(courseId) {
  return Database.assignments.filter((a) => a.course === courseId);
}

export function createAssignment(courseId, assignment) {
  const newAssignment = { ...assignment, _id: uuidv4(), course: courseId };
  Database.assignments.push(newAssignment);
  return newAssignment;
}

export function updateAssignment(id, updates) {
  const assignment = Database.assignments.find((a) => a._id === id);
  Object.assign(assignment, updates);
  return assignment;
}

export function deleteAssignment(id) {
  Database.assignments = Database.assignments.filter((a) => a._id !== id);
  return { status: "deleted" };
}