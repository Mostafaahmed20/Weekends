// create new profile for our agent
const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const TeamModel = require("../Models/AddtemModel");

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
    await TeamModel.find({}).then((data) => {
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
router.delete("/All", (req, res) => {
  try {
    TeamModel.delete({}).then((data) => res.json({ msg: "deleted all " }));
  } catch (Err) {
    res.json({ msg: Err });
  }
});

module.exports = router;
