const { Router } = require('express');
const router = Router();
const controller = require('./controller')

router.get("/project/:faculty_id/:course_id/:semester", controller.getAllProjects);
router.put("/update/:student_id/:project_id", controller.updateGroup);
router.get("/:student_id/:project_id", controller.getAllGroups);
router.post("/", controller.addNewGroup)

module.exports = router;