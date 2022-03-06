const pool = require('../../db')
const queries = require('./queries')

const getFiles = (req, res) => {
    pool.query(queries.getFiles, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    })
};

const getFileById = (req, res) => {
    const { project_id, file_id } = req.params;
    pool.query(queries.getFileById, [project_id, file_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    })
};

const getProjectFiles = (req, res) => {
    const project_id = parseInt(req.params.id);
    pool.query(queries.getProjectFiles, [project_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    })
};

const addInfo = (req, res) => {
    const { project_id, file_id } = req.params;
    const { achievements, supervisor_comments, next_meeting } = req.body;
    pool.query(queries.getFileById, [project_id, file_id], (error, results) => {
        const noProjectFound = !results.rows.length;
        if (noProjectFound) {
            res.send("File dosen't exists in the database");
        }
        else {
            pool.query(queries.addInfo, [achievements, supervisor_comments, next_meeting, project_id, file_id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Deadline Changed Successfully!");
            })
        }

    })
};

const addFile = (req, res) => {
    const { file_id, project_id, deadline } = req.body;
    pool.query(queries.addFile, [file_id, project_id, deadline], (error, results) => {
        if (error) throw error;
        res.status(201).send("Slot Created Successfully!");
    })
};

const uploadFile = (req, res) => {
    const { project_id, file_id } = req.params;
    const { project_file } = req.body;
    pool.query(queries.getFileById, [project_id, file_id], (error, results) => {
        const noFileFound = !results.rows.length;
        if (noFileFound) {
            res.send("File dosen't exists in the database");
        }
        else {
            pool.query(queries.uploadFile, [project_file, project_id, file_id], (error, results) => {
                if (error) throw error;
                res.status(201).send("File Uploaded Successfully!");
            })
        }

    })

};

const deleteFile = (req, res) => {
    const { project_id, file_id } = req.params;
    pool.query(queries.getFileById, [project_id, file_id], (error, results) => {
        const noFileFound = !results.rows.length;
        if (noFileFound) {
            res.send("File dosen't exists in the database");
        }
        else {
            pool.query(queries.deleteFile, [project_id, file_id], (error, results) => {
                if (error) throw error;
                res.status(200).send("File Deleted Successfully!");
            })
        }

    })
};

const changeDeadline = (req, res) => {
    const { project_id, file_id } = req.params;
    const { deadline } = req.body;
    pool.query(queries.getFileById, [project_id, file_id], (error, results) => {
        const noProjectFound = !results.rows.length;
        if (noProjectFound) {
            res.send("Project dosen't exists in the database");
        }
        else {
            pool.query(queries.changeDeadline, [deadline, project_id, file_id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Deadline Changed Successfully!");
            })
        }

    })
};


module.exports = {
    getFiles,
    getFileById,
    getProjectFiles,
    addFile,
    uploadFile,
    addInfo,
    changeDeadline,
    deleteFile,
}