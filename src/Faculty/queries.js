const getFaculty = "SELECT * FROM faculty";
const getFacultyById = " SELECT * FROM faculty WHERE faculty_id= $1";
const addFaculty = "INSERT INTO faculty (faculty_id,faculty_name) VALUES ($1,$2)";
const deleteFaculty = "DELETE FROM faculty WHERE faculty_id = $1";

module.exports = {
    getFaculty,
    getFacultyById,
    addFaculty,
    deleteFaculty
}