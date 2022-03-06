const getProposals = "SELECT * FROM project_proposals";
const getProjectProposal = "SELECT proposal_id, proposal_file, comments, deadline from project_proposals where project_id = $1 AND proposal_id = $2";
const getProposalById = "SELECT proposal_id, proposal_file, comments, deadline from project_proposals where project_id= $1";
const addProposal = "INSERT INTO project_proposals (proposal_id, project_id, deadline) VALUES ($1,$2,$3)";
const addComment = "update project_proposals set comments = $1 where project_id = $2 AND proposal_id = $3";
const uploadProposal = "update project_proposals set proposal_file = $1 WHERE project_id = $2 AND proposal_id = $3";
const changeDeadline = "update project_proposals set deadline = $1 where project_id = $2 AND proposal_id = $3";
const deleteProposal = "DELETE FROM project_proposals WHERE project_id = $1 AND proposal_id = $2";

module.exports = {
    getProposals,
    getProjectProposal,
    getProposalById,
    addProposal,
    uploadProposal,
    addComment,
    changeDeadline,
    deleteProposal
}   