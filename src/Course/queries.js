const getCourses = "SELECT * FROM course";
const getCourseById = " SELECT * FROM course WHERE course_id= $1";
const addCourse = "INSERT INTO course (course_id, course_name) VALUES ($1, $2)";
const deleteCourse = "DELETE FROM course WHERE course_id = $1";


module.exports = {
    getCourses,
    getCourseById,
    addCourse,
    deleteCourse
}