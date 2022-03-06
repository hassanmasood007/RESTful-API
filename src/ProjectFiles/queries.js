const getFiles = "SELECT * FROM project_files";
const getFileById = "SELECT * FROM project_files WHERE project_id = $1 AND file_id = $2";
const getProjectFiles = "SELECT * FROM project_files WHERE project_id = $1"
const addFile = "INSERT INTO project_files (file_id, project_id, deadline) VALUES ($1,$2,$3)";
const uploadFile = "update project_files set project_file = $1 WHERE project_id = $2 AND file_id = $3";
const addInfo = "UPDATE project_files set achievements = $1, supervisor_comments = $2, next_meeting = $3 where project_id = $4 AND file_id = $5"
const changeDeadline = "update project_files set deadline = $1 where project_id = $2 AND file_id = $3";
const deleteFile = "DELETE FROM project_files WHERE project_id = $1 AND file_id = $2";

module.exports = {
    getFiles,
    getFileById,
    getProjectFiles,
    addFile,
    uploadFile,
    addInfo,
    changeDeadline,
    deleteFile
}