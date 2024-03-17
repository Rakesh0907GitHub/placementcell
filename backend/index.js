const express = require('express')
const app = express()
const port = 5000
const db = require("./db")
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

db.connectDB();

const path = require('path')

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Route to retrieve job data
app.get('/displaydata', async (req, res) => {
  const jobdata = await db.getJobData();
  res.json(jobdata);
});

// Route to retrieve applied job data
app.get('/displayappliedjobs', async (req, res) => {
  const Appliedjobdata = await db.getAppliedJobData();
  res.json(Appliedjobdata);
});

app.use('/api', require("./Routers/CreateUser"));
app.use('/api', require("./Routers/ResumeCreate"));
app.use('/api', require("./Routers/DislplayData"));
app.use('/api', require("./Routers/AppliedStudents"));
app.use('/api', require("./Routers/DisplayAppliedJobs"));
app.use('/api', require("./Routers/Admin"));
app.use('/api', require("./Routers/Company"));
app.use('/api', require("./Routers/CompanyDetails"));



//static files

app.use(express.static(path.join(__dirname, "./build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})