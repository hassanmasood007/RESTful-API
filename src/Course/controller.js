const pool = require('../../db')
const queries = require('./queries')

const getCourses = (req, res) => {
    pool.query(queries.getCourses, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    })
};

const getCourseById = (req, res) => {
    const course_id = req.params.id;
    pool.query(queries.getCourseById, [course_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    })
};
const addCourse = (req, res) => {
    const { course_id, course_name } = req.body;
    pool.query(queries.addCourse, [course_id, course_name], (error, results) => {
        if (error) throw error;
        res.status(201).send("Course Created Successfully!");
    })
};
const deleteCourse = (req, res) => {
    const course_id = req.params.id;
    pool.query(queries.getCourseById, [course_id], (error, results) => {
        const noCourseFound = !results.rows.length;
        if (noCourseFound) {
            res.send("Course dosen't exists in the database");
        }
        else {
            pool.query(queries.deleteCourse, [course_id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Course Deleted Successfully!");
            })
        }

    })
};

const updateCourse = (req, res) => {
    const id = req.params.id;
    pool.query(queries.getCourseById, [id], (error, results) => {
        const noCourseFound = !results.rows.length;
        if (noCourseFound) {
            res.send("Course dosen't exists in the database");
        }
        else {
            pool.query(queries.updateCourse, [id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Course updated Successfully!");
            })
        }

    })
};

module.exports = {
    getCourses,
    getCourseById,
    addCourse,
    deleteCourse,
    updateCourse
}