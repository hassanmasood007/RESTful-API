const { Router } = require('express');
const router = Router();
const controller = require('./controller')

router.get("/", controller.getCourses)
router.get("/:id", controller.getCourseById);
router.post("/", controller.addCourse)

module.exports = router;