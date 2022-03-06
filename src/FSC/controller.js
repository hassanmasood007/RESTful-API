const pool = require('../../db')
const queries = require('./queries')



const getCoursesById = (req, res) => {
    const { faculty_id, semester } = req.params;
    pool.query(queries.getCoursesById, [faculty_id, semester], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    })
};

const getSemesterByFaculty = (req, res) => {
    const faculty_id = req.params.id;
    pool.query(queries.getSemesterByFaculty, [faculty_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    })
};

const getSemesterByStudent = (req, res) => {
    const student_id = req.params.id;
    pool.query(queries.getSemesterByStudent, [student_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    })
};

const addNewCourse = (req, res) => {
    const { student_id, course_id, semester, faculty_id } = req.body;
    pool.query(queries.addNewCourse, [student_id, course_id, semester, faculty_id], (error, results) => {
        if (error) throw error;
        res.status(201).send("Course Created Successfully!");
    })
};


module.exports = {
    getCoursesById,
    getSemesterByFaculty,
    getSemesterByStudent,
    addNewCourse,
}