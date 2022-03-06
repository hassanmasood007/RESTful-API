const getProjects = "SELECT * FROM project";
const ifexists = "SELECT project_name, complex_activity from project where project_id = $1";
const getProjectById = "SELECT project_name, complex_activity from project where course_id = $1";
const addProject = "INSERT INTO project (course_id,faculty_id, project_name, semester) VALUES ($1,$2,$3,$4)";
const deleteProject = "DELETE FROM project WHERE project_id = $1";
const updateProject = "UPDATE project set status = $1 where project_id = $2";
const getProjectData = "select project.project_id, project.project_name, project.status, project.faculty_id,student.student_name, student.student_id, course.course_name from project inner join groups on project.project_id = groups.project_id inner join student on student.student_id = groups.student_id inner join course on project.course_id = course.course_id where project.project_id IN (select project_id from groups where student_id = $1 AND semester = $2)";

module.exports = {
  getProjects,
  ifexists,
  getProjectById,
  addProject,
  updateProject,
  deleteProject,
  getProjectData
};
