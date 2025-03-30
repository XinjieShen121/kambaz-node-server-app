// import Courses from "../Courses";
// export const courses = Courses;
// import modules from "./modules.json";
// import assignments from "./assignments.json";
// export { courses, modules, assignments};

import coursesData from "./courses.js";  // Import courses JSON file
import modulesData from "./modules.js";
import assignmentsData from "./assignments.js";
import usersData from "./users.js";
import enrollmentsData from "./enrollments.js";

// // Define the Course type here if needed
// export interface Course {
//   _id: string;
//   name: string;
//   number: string;
//   startDate: string;
//   endDate: string;
//   department: string;
//   credits: number;
//   description: string;
//   image: string; 
// }

// // Add an interface to define the structure of modules and lessons
// export interface Lesson {
//     _id: string;
//     name: string;
//     description: string;
//     module: string;
//   }
  
//   export interface Module {
//     _id: string;
//     name: string;
//     description: string;
//     course: string;
//     lessons?: Lesson[];
//   }

// // interface to define the structure of assignments
// export interface Assignment{
//     _id: string;
//     title: string;
//     course: string;
// }

// export interface User{
//     _id: string;
//     username: string;
//     password: string;
//     firstName: string;
//     lastName: string;
//     email: string;
//     dob: string;
//     role: string;
//     loginId: string;
//     section: string;
//     lastActivity: string;
//     totalActivity: string;
// }

// export interface Enrollment{
//     _id: string;
//     user: string;
//     course: string;
// }

// // Export the courses array
// export const courses: Course[] = coursesData;
// export const modules: Module[] = modulesData;
// export const assignments: Assignment[] = assignmentsData;
// export const users: User[] = usersData;
// export const enrollments: Enrollment[] = enrollmentsData;

export default { 
  courses: coursesData, 
  modules: modulesData, 
  assignments: assignmentsData, 
  users: usersData, 
  enrollments: enrollmentsData 
};






