const pool = require('../../db')
const queries = require('./queries')

const getAllProjects = (req, res) => {
    const { faculty_id, course_id, semester } = req.params;
    pool.query(queries.getAllProjects, [faculty_id, course_id, semester], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    })
};
const addNewGroup = (req, res) => {
    const { student_id, project_id } = req.body;
    pool.query(queries.addNewGroup, [student_id, project_id], (error, results) => {
        if (error) throw error;
        res.status(201).send("Group Created Successfully!");
    })
};

const updateGroup = (req, res) => {
    const { student_id, project_id } = req.params;
    const { implementation, demo, knowledge, report } = req.body;

    pool.query(queries.updateGroup, [implementation, demo, knowledge, report, student_id, project_id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Group updated Successfully !");
    })
};

const getAllGroups = (req, res) => {
    const { student_id, project_id } = req.params;
    pool.query(queries.getAllGroups, [student_id, project_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    })
};

module.exports = {
    getAllProjects,
    addNewGroup,
    updateGroup,
    getAllGroups
}