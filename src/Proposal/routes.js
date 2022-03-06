const { Router } = require('express');
const router = Router();
const controller = require('./controller')

router.get("/", controller.getProposals);
router.get("/:id", controller.getProposalById);
router.get("/proposals/:project_id/:proposal_id", controller.getProjectProposal);
router.post("/", controller.addProposal);
router.put("/uploadproposal/:project_id/:proposal_id", controller.uploadProposal)
router.put("/addcomment/:project_id/:proposal_id", controller.addComment);
router.put("/changedeadline/:project_id/:proposal_id", controller.changeDeadline);
router.delete("/:project_id/:proposal_id", controller.deleteProposal)

module.exports = router;