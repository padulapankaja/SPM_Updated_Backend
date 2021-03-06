const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

//define server running port
let port = 4000;

const MongoClient = require("mongodb").MongoClient;

//======================================================================================================
//===================================import routes    =================================================
//======================================================================================================

const lecturerRoute = require("./app/routes/lecturer.route");

const subjectRoute = require("./app/routes/subject.route");
const ConSession = require("./app/routes/conSession.route");
const ParallelRoute = require("./app/routes/parallel.route");
const OverlapRoute = require("./app/routes/overlap.route");
const buildingRoute = require("./app/routes/building.route");
const roomRoute = require("./app/routes/room.route");
const statsRoute = require("./app/routes/stats.route");
const GenerateSubGroupIdRoute = require("./app/routes/generateSubgroup.route");
const StudentRoute = require("./app/routes/student.route");
const TagRoute = require("./app/routes/Tag.route");
const SessionRoute = require("./app/routes/sessions.routes");
const AllocateSessionRoute = require("./app/routes/allocateSess.route");
const AllocateLecRoute = require("./app/routes/allocateLec.route");
const AllocateGroupRoute = require("./app/routes/allocateGroup.route");

const suitableRoute = require("./app/routes/suitable.route");

const WorkingDaysRoute = require("./app/routes/workingdays.route");
const TimeslotsRoute = require("./app/routes/timeslots.route");
const GenerateRoute = require("./app/routes/generate.route");


//======================================================================================================
//===================================import config files ===============================================
//======================================================================================================

// import db
const dbConfig = require("./config/db.config");

//======================================================================================================
//===================================open apps services  ===============================================
//======================================================================================================
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

mongoose.set("useCreateIndex", true);
//======================================================================================================
//=================================== defines routes     ===============================================
//======================================================================================================

//user routes
app.use("/api/lecturer", lecturerRoute);
app.use("/api/parallel", ParallelRoute);
app.use("/api/subject", subjectRoute);
app.use("/api/consession", ConSession);
app.use("/api/buildings", buildingRoute);
app.use("/api/rooms", roomRoute);
app.use("/api/stats", statsRoute);
app.use("/api/GenerateSubGroup", GenerateSubGroupIdRoute);
app.use("/api/student", StudentRoute);
app.use("/api/tag", TagRoute);
app.use("/api/suitable", suitableRoute);
app.use("/api/Not_overlap", OverlapRoute);

app.use("/api/allocateLect", AllocateLecRoute);
app.use("/api/allocateGroup", AllocateGroupRoute);
app.use("/api/workingdays", WorkingDaysRoute);
app.use("/api/timeslots", TimeslotsRoute);
app.use("/api/allocatSession", AllocateSessionRoute);


app.use("/api/session", SessionRoute);
app.use("/api/generate", GenerateRoute);



//======================================================================================================
//================================== Handlle Error     ===========================================
//======================================================================================================
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  console.log(error);

  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

//======================================================================================================
//=================================== critical functions     ===========================================
//======================================================================================================

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useFindAndModify: false ,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database now");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

// open server
app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
