// import * as dao from "./dao.js";

// export default function EnrollmentRoutes(app) {
//   app.post("/api/enrollments", (req, res) => {
//     const { userId, courseId } = req.body;
//     const enrollment = dao.enrollUserInCourse(userId, courseId);
//     res.json(enrollment);
//   });

//   app.delete("/api/enrollments", (req, res) => {
//     const { userId, courseId } = req.body;
//     const status = dao.unenrollUserFromCourse(userId, courseId);
//     res.json(status);
//   });

//   app.get("/api/enrollments/:userId", (req, res) => {
//     const { userId } = req.params;
//     const enrollments = dao.findEnrollmentsForUser(userId);
//     res.json(enrollments);
//   });
// }





// // no longer need Kambaz/Enrollments/routes.js
// import {
//     enrollUserInCourse,
//     unenrollUserFromCourse,
//     // modify according to guide
//     // findEnrollmentsForUser,
//     findCoursesForUser,
//   } from "./dao.js";
  
//   export default function EnrollmentRoutes(app) {
//     app.post("/api/enrollments", (req, res) => {
//       const enrollment = enrollUserInCourse(req.body.user, req.body.course);
//       res.json(enrollment);
//     });
  
//     app.delete("/api/enrollments/:userId/:courseId", (req, res) => {
//       const { userId, courseId } = req.params;
//       const status = unenrollUserFromCourse(userId, courseId);
//       res.sendStatus(204);
//     });
  
//     // ❌ DELETE this from EnrollmentRoutes
// //     app.get("/api/enrollments/users/:userId", (req, res) => {
// //       const { userId } = req.params;
// //       const userEnrollments = findEnrollmentsForUser(userId);
// //       res.json(userEnrollments);
// //     });
// }


