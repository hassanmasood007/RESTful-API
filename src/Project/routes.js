const { Router } = require('express');
const router = Router();
const controller = require('./controller')

router.get("/", controller.getProjects);
router.get("/project/:id", controller.getProjectById);
router.get("/data/:student_id/:semester", controller.getProjectData);
router.post("/", controller.addProject);
router.put("/:id", controller.updateProject);
router.delete("/:id", controller.deleteProject);

module.exports = router;