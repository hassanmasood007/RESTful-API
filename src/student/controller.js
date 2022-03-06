const pool = require('../../db')
const queries = require('./queries')

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    })
};

const getStudentById = (req, res) => {
    const student_id = req.params.id;
    console.log(student_id);
    pool.query(queries.getStudentById, [student_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    })
};
const addStudent = (req, res) => {
    const { student_id, student_name } = req.body;
    pool.query(queries.addStudent, [student_id, student_name], (error, results) => {
        if (error) throw error;
        res.status(201).send("Student Created Successfully!");
    })
};
const deleteStudent = (req, res) => {
    const student_id = req.params.id;
    pool.query(queries.getStudentById, [student_id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send("Student dosen't exists in the database");
        }
        else {
            pool.query(queries.deleteStudent, [student_id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Student Deleted Successfully!");
            })
        }

    })
};

const updateStudent = (req, res) => {
    const id = req.params.id;
    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send("Student dosen't exists in the database");
        }
        else {
            pool.query(queries.updateStudent, [id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Student Deleted Successfully!");
            })
        }

    })
};

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    deleteStudent,
    updateStudent
}