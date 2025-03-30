const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};

// Define a new module object:
const moduleObject = {
  id: "CS5610-Module1",
  name: "Introduction to WebDevelopment",
  description: "An introduction to full-stack web development",
  course: "CS5610",
};

export default function WorkingWithObjects(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });
  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });
  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });
  // 1. Return the complete module object
  app.get("/lab5/module", (req, res) => {
    res.json(moduleObject);
  });

  // 2. Return only the module's name
  app.get("/lab5/module/name", (req, res) => {
    res.json(moduleObject.name);
  });

  // 3. Update the module's name (newName comes from the path)
  app.get("/lab5/module/name/:newName", (req, res) => {
    const { newName } = req.params;
    moduleObject.name = newName;
    res.json(moduleObject);
  });

  // 4. Update the module's description (newDescription comes from the path)
  app.get("/lab5/module/description/:newDescription", (req, res) => {
    const { newDescription } = req.params;
    moduleObject.description = newDescription;
    res.json(moduleObject);
  });

  // Update assignment score
  app.get("/lab5/assignment/score/:newScore", (req, res) => {
    const { newScore } = req.params;
    assignment.score = parseInt(newScore);
    res.json(assignment);
  });

  // Update assignment completed status (expects "true" or "false")
  app.get("/lab5/assignment/completed/:newCompleted", (req, res) => {
    const { newCompleted } = req.params;
    assignment.completed = newCompleted === "true";
    res.json(assignment);
  });

}
