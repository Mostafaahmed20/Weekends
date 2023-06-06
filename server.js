const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

mongoose
  .connect(process.env.mongouri)
  .then(() => console.log("app conected"))
  .catch((err) => console.log(err));
app.use(bodyParser.json());
app.use(cors());
app.use("/item", require("./Api/NewsApi"));
app.use("/team", require("./Api/Addteam"));
app.use("/Comment", require("./Api/Qutation"));
app.use("/salesB2C", require("./Api/SalesB2c"));
app.use("/User", require("./Api/UserApi"));
app.use(express.static(path.join(__dirname, "/public")));

// if (process.env.NODE_ENV === "Production") {
//   app.use(express.static(path.join(__dirname, "/myapp/build")));
// }

app.get("*", (req, res) => {
<<<<<<< HEAD
  res.setHeader("content-type", "text/html");
  res.send("welcome");
=======
res.json("welcome");
>>>>>>> 9b958a891dc020c0cdee2689644f2b350d5372bf
});
const Port = process.env.PORT || 7070;

app.listen(Port, () => console.log(`app is listen to port ${Port}`));
// this is the last update
