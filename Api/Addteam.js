// create new profile for our agent
const teamModel = require("../Models/AddtemModel");
const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");

router.post("/", async (req, res) => {
  const { pic, name, Account, email, sfid, contact } = req.body;
  const GravPic = gravatar.url(email, { s: "100", r: "x", d: "retro" }, true);
  try {
    await teamModel
      .findOne({ email })
      .then((data) => {
        if (data) {
          res.json({ msg: "employee founded" });
        } else {
          new teamModel({
            pic: GravPic,
            name,
            Account,
            email,
            sfid,
            contact,
          }).save((data) => {
            res.json({ msg: data });
          });
        }
      })
      .catch((err) => {
        res.json({ msg: err });
      });
  } catch (err) {}
});

router.get("/", async (req, res) => {
  try {
    await teamModel.find({}).then((data) => {
      res.json(data);
    });
  } catch (err) {
    res.json(err);
  }
});

router.delete("/:Myid", async (req, res) => {
  const { Myid } = req.params;
  try {
    await teamModel.findOneAndDelete(Myid).then((dataDeleted) => {
      if (dataDeleted) {
        res.json({ msg: "deleted" });
      } else {
        res.json({ msg: "error" });
      }
    });
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
