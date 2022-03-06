const express = require('express');
const app = express();
const studentRoutes = require("./src/student/routes");
const courseRoutes = require("./src/Course/routes");
const facultyRoutes = require("./src/Faculty/routes");
const projectRoutes = require("./src/Project/routes");
const fscRoutes = require("./src/FSC/routes");
const projectFilesRoutes = require("./src/ProjectFiles/routes");
const proposalFilesRoutes = require("./src/Proposal/routes");
const groupRoutes = require("./src/Group/routes")

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,locale");
    res.header("Access-Control-Allow-Methods", "POST,PUT,GET,DELETE, OPTIONS");

    next();
});

app.get('/', (req, res) => {
    res.send("PES")
})

app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/faculty', facultyRoutes);
app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1/fsc', fscRoutes);
app.use('/api/v1/projectFiles', projectFilesRoutes);
app.use('/api/v1/proposal', proposalFilesRoutes);
app.use('/api/v1/group', groupRoutes);

app.listen(4000, () => {
    console.log("serving on port 4000")
})