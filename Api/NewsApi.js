// if you want to add new thing
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const itemModel = require("../Models/News");
router.post("/", async (req, res) => {
  const { title, Destination, description, category, image } = req.body;
  try {
    new itemModel({
      title,
      Destination,
      description,
      category,
      image,
    }).save((data) => {
      res.json({ msg: data });
    });
  } catch (err) {
    res.json({ msg: err });
  }
});
router.put("/", async (req, res) => {
  const { _id, title, Destination, description, category, image } = req.body;
  try {
    await itemModel
      .findOneAndUpdate(
        { _id },
        { title, Destination, description, category, image }
      )
      .then((data) => {
        if (data) {
          res.json({ msg: "data updated ." });
        } else {
          res.json({ msg: "data not  updated ." });
        }
      });
  } catch (err) {
    res.json({ msg: err });
  }
});
router.delete("/", (req, res) => {
  const { _id } = req.body;
  try {
    itemModel.findOneAndDelete({ _id }).then((data) => {
      if (data) {
        res.json({ msg: "deleted" });
      } else {
        res.json({ msg: "not deleted" });
      }
    });
  } catch (err) {
    res.json({ msg: err });
  }
});

router.get("/", (req, res) => {
  try {
    itemModel.find({}).then((data) => {
      if (data) {
        res.json({ msg: data });
      } else {
        res.json({ msg: "error happened " });
      }
    });
  } catch (err) {
    res.json({ msg: err });
  }
});
router.post("/Myid", async (req, res) => {
  const { Myid } = req.body;
  try {
    await itemModel.findOne(Myid).then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.json({ msg: "no data found" });
      }
    });
  } catch (err) {
    res.json({ err });
  }
});
router.delete("/deleteOne/:Myid", (req, res) => {
  const { Myid } = req.params;
  try {
    itemModel.deleteOne({ Myid }).then((deleted) => {
      if (deleted) {
        res.json({ msg: "deleted" });
      } else {
        res.json({ msg: "not deleted" });
      }
    });
  } catch (err) {
    res.json({ msg: err });
  }
});
router.delete("/deleteAll", (req, res) => {
  try {
    itemModel.deleteMany({}).then((deleted) => {
      if (deleted) {
        res.json({ msg: "deleted" });
      } else {
        res.json({ msg: "not deleted" });
      }
    });
  } catch (err) {
    res.json({ msg: err });
  }
});
module.exports = router;
