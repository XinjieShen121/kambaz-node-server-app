


// import db from "../Database/index.js";
// import { v4 as uuidv4 } from "uuid";

// export function enrollUserInCourse(userId, courseId) {
//   const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
//   db.enrollments.push(newEnrollment);
//   return newEnrollment;
// }

// export function unenrollUserFromCourse(userId, courseId) {
//   db.enrollments = db.enrollments.filter(
//     (e) => e.user !== userId || e.course !== courseId
//   );
//   return { status: "success" };
// }

// export function findEnrollmentsForUser(userId) {
//   return db.enrollments.filter((e) => e.user === userId);
// }

import EnrollmentModel from "./model.js";
import UserModel from "../Users/model.js";

import model from "./model.js";
export async function findCoursesForUser(userId) {
const enrollments = await model.find({ user: userId }).populate("course");
return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
const enrollments = await model.find({ course: courseId }).populate("user");
return enrollments.map((enrollment) => enrollment.user);
}
export async function enrollUserInCourse(user, course) {

  // Update enrollUserInCourse function
  const existing = await model.findOne({ _id: `${user}-${course}` });
  if (existing) {
    console.warn(`⚠️ Enrollment ${user}-${course} already exists.`);
    return existing; // don't insert again
  }

  const newEnrollment = { user, course, _id: `${user}-${course}` };
  return model.create(newEnrollment);
  }

  export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
  }



  // function find enrollment for users
  export async function findEnrollmentsForUser(userId) {
    const enrollments = await model.find({ user: userId }).populate("course");
    return enrollments.map((e) => e.course);
  }
  

