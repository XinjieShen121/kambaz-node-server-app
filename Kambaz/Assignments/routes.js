import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignments = dao.findAssignmentsForCourse(cid);
    res.json(assignments);
  });

  app.post("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignment = dao.createAssignment(cid, req.body);
    res.json(assignment);
  });

  app.put("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const updated = dao.updateAssignment(aid, req.body);
    res.json(updated);
  });

  app.delete("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const result = dao.deleteAssignment(aid);
    res.json(result);
  });
}