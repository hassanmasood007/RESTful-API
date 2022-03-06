const { Router } = require('express');
const router = Router();
const controller = require('./controller')

router.get("/", controller.getFaculty);
router.get("/:id", controller.getFacultyById);
router.post("/", controller.addFaculty)
router.put("/:id", controller.updateFaculty)
router.delete("/:id", controller.deleteFaculty)

module.exports = router;