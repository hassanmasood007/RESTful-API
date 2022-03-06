const pool = require('../../db')
const queries = require('./queries')

const getFaculty = (req, res) => {
    pool.query(queries.getFaculty, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    })
};

const getFacultyById = (req, res) => {
    const faculty_id = req.params.id;
    pool.query(queries.getFacultyById, [faculty_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    })
};
const addFaculty = (req, res) => {
    const { faculty_id, faculty_name } = req.body;
    pool.query(queries.addFaculty, [faculty_id, faculty_name], (error, results) => {
        if (error) throw error;
        res.status(201).send("Faculty Created Successfully!");
    })
};
const deleteFaculty = (req, res) => {
    const faculty_id = parseInt(req.params.id);
    pool.query(queries.getFacultyById, [faculty_id], (error, results) => {
        const noFacultyFound = !results.rows.length;
        if (noFacultyFound) {
            res.send("Faculty dosen't exists in the database");
        }
        else {
            pool.query(queries.deleteFaculty, [faculty_id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Faculty Deleted Successfully!");
            })
        }

    })
};

const updateFaculty = (req, res) => {
    const id = req.params.id;
    pool.query(queries.getFacultyById, [id], (error, results) => {
        const noFacultyFound = !results.rows.length;
        if (noFacultyFound) {
            res.send("Faculty dosen't exists in the database");
        }
        else {
            pool.query(queries.updateFaculty, [id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Faculty Deleted Successfully!");
            })
        }

    })
};

module.exports = {
    getFaculty,
    getFacultyById,
    addFaculty,
    deleteFaculty,
    updateFaculty
}