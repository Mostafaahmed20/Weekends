const express = require("express");
const Usermodel = require("../Models/UserModel");
const Route = express.Router();

Route.post("/Register", async (Req, Res) => {
  const { name, email, password } = Req.body;
  try {
    await Usermodel.findOne({ email }).then((data) => {
      if (data) {
        return Res.send(400).json({ msg: "Email Already Founded " });
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
    Res.send(400).json({ msg: err });
  }
}).post("/Login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const Match = await Usermodel.findOne({ email }).then((data) => {
      if (data) {
        const CheckPass = password === Match.password;
        if (CheckPass) {
          res.send(200).json({ msg: "logged in success " });
        }
      }
    });
  } catch (err) {
    res.send(400).json({ msg: err });
  }
});

module.exports = Route;
