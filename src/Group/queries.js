const getAllProjects = "select project.project_id, project.project_name, project.status, student.student_name, student.student_id from project inner join groups on project.project_id = groups.project_id inner join student on student.student_id = groups.student_id where project.faculty_id = $1 AND project.course_id = $2 AND semester = $3";
const addNewGroup = "INSERT INTO groups (student_id, project_id) VALUES ($1,$2)";
const updateGroup = "update groups set implementation = $1, demo  = $2, knowledge  = $3, report  = $4 where student_id = $5 AND project_id = $6";
const getAllGroups = "Select * from groups where Student_id = $1 AND project_id = $2;"

module.exports = {
    getAllProjects,
    addNewGroup,
    updateGroup,
    getAllGroups
}