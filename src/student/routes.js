const { Router } = require('express');
const router = Router();
const controller = require('./controller')

router.get("/", controller.getStudents);
router.get("/:id", controller.getStudentById);
router.post("/", controller.addStudent)
router.put("/:id", controller.updateStudent)
router.delete("/:id", controller.deleteStudent)

module.exports = router;