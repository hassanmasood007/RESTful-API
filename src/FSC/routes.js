const { Router } = require('express');
const router = Router();
const controller = require('./controller')

router.get("/courses/:faculty_id/:semester", controller.getCoursesById);
router.get("/student/:id", controller.getSemesterByStudent);
router.get("/faculty/:id", controller.getSemesterByFaculty);
router.post("/", controller.addNewCourse)

module.exports = router;