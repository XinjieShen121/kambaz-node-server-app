// import "dotenv/config";
// import session from "express-session";
// import express from "express";
// import Hello from "./Hello.js";
// import Lab5 from "./Lab5/index.js";
// import cors from "cors";
// import UserRoutes from "./Kambaz/Users/routes.js";
// import CourseRoutes from "./Kambaz/Courses/routes.js";
// import ModuleRoutes from "./Kambaz/Modules/routes.js";
// import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
// import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";
// const app = express();
// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.NETLIFY_URL || "http://localhost:5173",

//   })
// );
// const sessionOptions = {
//     secret: process.env.SESSION_SECRET || "kambaz"
//     ,
//     resave: false,
//     saveUninitialized: false,
//     //  added a cookie config
//     cookie: {
//         sameSite: "lax", // ✅ For localhost development
//         secure: false    // ✅ Must be false without HTTPS
//       }
//     };
//     if (process.env.NODE_ENV !=="development") {
//     sessionOptions.proxy = true;
//     sessionOptions.cookie = {
//     sameSite: "none"
//     ,
//     secure: true,
//     domain: process.env.NODE_SERVER_DOMAIN,
//     };

//     }

// app.use(session(sessionOptions));
// app.use(express.json());
// UserRoutes(app);
// CourseRoutes(app);
// ModuleRoutes(app);
// AssignmentRoutes(app);
// EnrollmentRoutes(app);
// Lab5(app);
// Hello(app);
// app.listen(process.env.PORT || 4000);


// delete enrollment routes
import "dotenv/config";
import session from "express-session";
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
// import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";
import mongoose from "mongoose";

const CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kambaz";
mongoose.connect(CONNECTION_STRING);

const app = express();

const isProduction = process.env.NODE_ENV === "production";

// ✅ Correct CORS setup for both localhost and Netlify
app.use(
  cors({
    credentials: true,
    origin: [
      // "https://a5--kambaz-react-web-app-cs5610-sp25-xjs.netlify.app",  //Your Netlify app
      "https://kambaz-react-web-app-cs5610-sp25-hw6.netlify.app",
      "http://localhost:5173", // Local development
    ],
  })
);

// ✅ Secure and compatible session cookie config
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kambaz",
  resave: false,
  saveUninitialized: false,
  proxy: isProduction, // needed for sameSite: 'none'
  cookie: {
    httpOnly: true,
    sameSite: isProduction ? "none" : "lax",
    secure: isProduction, // must be true when deployed with HTTPS
  },
};

app.use(session(sessionOptions));
app.use(express.json());

// ✅ Attach all routes
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
// EnrollmentRoutes(app);
Lab5(app);
Hello(app);

// ✅ Start server
app.listen(process.env.PORT || 4000);
