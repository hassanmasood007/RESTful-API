const pool = require('../../db')
const queries = require('./queries')

const getProjects = (req, res) => {
    pool.query(queries.getProjects, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    })
};

const getProjectById = (req, res) => {
    const course_id = req.params.id;
    pool.query(queries.getProjectById, [course_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const getProjectData = (req, res) => {
    const { student_id, semester } = req.params;
    pool.query(queries.getProjectData, [student_id, semester], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};


const addProject = (req, res) => {
    const { course_id, faculty_id, project_name, semester } = req.body;
    pool.query(queries.addProject, [course_id, faculty_id, project_name, semester], (error, results) => {
        pool.query(queries.getProjects, (err, newResults) => {
            if (err) throw error;
            res.status(200).json(newResults.rows[newResults.rows.length - 1]);

        })
    })
};


const deleteProject = (req, res) => {
    const project_id = req.params.id;
    pool.query(queries.ifexists, [project_id], (error, results) => {
        const noProjectFound = !results.rows.length;
        if (noProjectFound) {
            res.send("Project dosen't exists in the database");
        }
        else {
            pool.query(queries.deleteProject, [project_id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Project Deleted Successfully!");
            })
        }

    })
};



const updateProject = (req, res) => {
    const project_id = req.params.id;
    const { status } = req.body;
    pool.query(queries.ifexists, [project_id], (error, results) => {
        const noProjectFound = !results.rows.length;
        if (noProjectFound) {
            res.send("Project dosen't exists in the database");
        }
        else {
            pool.query(queries.updateProject, [status, project_id], (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(200).send("Project Updated");
            })
        }

    })
};


module.exports = {
    getProjects,
    getProjectById,
    getProjectData,
    addProject,
    deleteProject,
    updateProject
}