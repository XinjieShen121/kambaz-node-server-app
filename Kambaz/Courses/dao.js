// import Database from "../Database/index.js";
import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function findAllCourses() {
  // return Database.courses;
  return model.find();
}

// remove the old old in-memory Database function
// export function findCoursesForEnrolledUser(userId) {
//   const { courses, enrollments } = Database;
//   const enrolledCourses = courses.filter((course) =>
//     enrollments.some(
//       (enrollment) =>
//         enrollment.user === userId && enrollment.course === course._id
//     )
//   );
//   return enrolledCourses;
// }

// replace with the enrollments dao.js instead


export function createCourse(course) {
  const newCourse = { ...course, _id: uuidv4() };
  return model.create(newCourse);
  // const newCourse = { ...course, _id: uuidv4() };
  // Database.courses = [...Database.courses, newCourse];
  // return newCourse;
}

export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
}

export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}


