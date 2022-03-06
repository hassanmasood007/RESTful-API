const { Router } = require('express');
const router = Router();
const controller = require('./controller')

router.get("/", controller.getFiles);
router.get("/file/:project_id/:file_id", controller.getFileById);
router.get("/files/:id", controller.getProjectFiles);
router.post("/", controller.addFile);
router.put("/upload/:project_id/:file_id", controller.uploadFile);
router.put("/changedeadline/:project_id/:file_id", controller.changeDeadline);
router.put("/addinfo/:project_id/:file_id", controller.addInfo);
router.delete("/:project_id/:file_id", controller.deleteFile);

module.exports = router; 