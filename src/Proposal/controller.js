const pool = require('../../db')
const queries = require('./queries')

const getProposals = (req, res) => {
    pool.query(queries.getProposals, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    })
};

const getProjectProposal = (req, res) => {
    const { project_id, proposal_id } = req.params;
    pool.query(queries.getProjectProposal, [project_id, proposal_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    })
};

const getProposalById = (req, res) => {
    const id = req.params.id;
    pool.query(queries.getProposalById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    })
};

const addProposal = (req, res) => {
    const { proposal_id, project_id, deadline } = req.body;
    pool.query(queries.addProposal, [proposal_id, project_id, deadline], (error, results) => {
        if (error) throw error;
        res.status(201).send("Slot Created Successfully!");
    })
};

const uploadProposal = (req, res) => {
    const { project_id, proposal_id } = req.params;
    const { proposal_file } = req.body;
    pool.query(queries.getProjectProposal, [project_id, proposal_id], (error, results) => {
        const noProjectFound = !results.rows.length;
        if (noProjectFound) {
            res.send("Proposal Slot dosen't exists in the database");
        }
        else {
            pool.query(queries.uploadProposal, [proposal_file, project_id, proposal_id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Comment Added Successfully!");
            })
        }

    })
};


const deleteProposal = (req, res) => {
    const { project_id, proposal_id } = req.params;
    pool.query(queries.getProjectProposal, [project_id, proposal_id], (error, results) => {
        const noProposalFound = !results.rows.length;
        if (noProposalFound) {
            res.send("Proposal dosen't exists in the database");
        }
        else {
            pool.query(queries.deleteProposal, [project_id, proposal_id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Proposal Deleted Successfully!");
            })
        }

    })
};

const addComment = (req, res) => {
    const { project_id, proposal_id } = req.params;
    const { comments } = req.body;
    pool.query(queries.getProjectProposal, [project_id, proposal_id], (error, results) => {
        const noProjectFound = !results.rows.length;
        if (noProjectFound) {
            res.send("Proposal dosen't exists in the database");
        }
        else {
            pool.query(queries.addComment, [comments, project_id, proposal_id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Comment Added Successfully!");
            })
        }

    })
};

const changeDeadline = (req, res) => {
    const { project_id, proposal_id } = req.params;
    const { deadline } = req.body;
    pool.query(queries.getProjectProposal, [project_id, proposal_id], (error, results) => {
        const noProjectFound = !results.rows.length;
        if (noProjectFound) {
            res.send("Proposal dosen't exists in the database");
        }
        else {
            pool.query(queries.changeDeadline, [deadline, project_id, proposal_id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Deadline Changed Successfully!");
            })
        }

    })
};

module.exports = {
    getProposals,
    getProposalById,
    getProjectProposal,
    addProposal,
    uploadProposal,
    addComment,
    changeDeadline,
    deleteProposal
}