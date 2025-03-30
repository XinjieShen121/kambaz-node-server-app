// import Database from "../Database/index.js";
// import { v4 as uuidv4 } from "uuid";
// export function enrollUserInCourse(userId, courseId) {
//   const { enrollments } = Database;
//   enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
// }




// import Database from "../Database/index.js";
// import { v4 as uuidv4 } from "uuid";

// export const enrollUserInCourse = (userId, courseId) => {
//   const newEnrollment = {
//     _id: uuidv4(),
//     user: userId,
//     course: courseId,
//   };
//   Database.enrollments.push(newEnrollment);
//   return newEnrollment;
// };

// export const unenrollUserFromCourse = (userId, courseId) => {
//   Database.enrollments = Database.enrollments.filter(
//     (e) => e.user !== userId || e.course !== courseId
//   );
//   return { status: "ok" };
// };

// export const findEnrollmentsForUser = (userId) =>
//   Database.enrollments.filter((e) => e.user === userId);



import db from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
  const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
  db.enrollments.push(newEnrollment);
  return newEnrollment;
}

export function unenrollUserFromCourse(userId, courseId) {
  db.enrollments = db.enrollments.filter(
    (e) => e.user !== userId || e.course !== courseId
  );
  return { status: "success" };
}

export function findEnrollmentsForUser(userId) {
  return db.enrollments.filter((e) => e.user === userId);
}


