const getCoursesById = "SELECT fsc.course_id, course.course_name, fsc.semester from fsc inner join course on fsc.course_id = course.course_id where fsc.faculty_id = $1 AND semester = $2 group by fsc.course_id, course.course_name, fsc.semester";
const addNewCourse = "INSERT INTO fsc (student_id, course_id, semester, faculty_id) VALUES ($1,$2,$3,$4)";
const getSemesterByFaculty = "select semester from fsc where faculty_id = $1 group by semester";
const getSemesterByStudent = "select semester from fsc where student_id = $1 group by semester;"

module.exports = {
    getCoursesById,
    getSemesterByStudent,
    getSemesterByFaculty,
    addNewCourse
}