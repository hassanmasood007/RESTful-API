const getStudents = "SELECT * FROM student";
const getStudentById = " SELECT * FROM student WHERE student_id= $1";
const addStudent = "INSERT INTO student (student_id,student_name) VALUES ($1,$2)";
const deleteStudent = "DELETE FROM student WHERE student_id = $1";

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    deleteStudent
}