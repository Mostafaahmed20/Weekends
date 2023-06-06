const express = require("express");
const Usermodel = require("../Models/UserModel");
const Route = express.Router();

Route.post("/Register", async (Req, Res) => {
  const { name, email, password } = Req.body;
  try {
    await Usermodel.findOne({ email }).then((data) => {
      if (data) {
        return Res.status(400).json({ msg: "Email Already Founded " });
      } else {
        new Usermodel({
          name,
          email,
          password,
        })
          .save()
          .then((data) => Res.json({ msg: data }));
      }
    });
  } catch (err) {
    Res.status(400).json({ msg: err });
  }
}).post("/Login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const Match = await Usermodel.findOne({ email }).then((data) => {
      console.log(data);
      if (data) {
        if (password === Match.password) {
          console.log(password , Match.password);
          res.json({ msg: "logged in success" });
        } else {
          res.json({ msg: "Username or password is incorect" });
        }
      }
    });
  } catch (err) {
    res.json({ msg: "Username or password is incorect" });
  }
});

module.exports = Route;
