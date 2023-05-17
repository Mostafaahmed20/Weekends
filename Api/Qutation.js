const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const B2BSModel = require("../Models/Qutation");

router.post("/", async (req, res) => {
  const {
    HotelName,
    CheckIn,
    CheckOut,
    NumberOfPax,
    Nationality,
    NumberOfUnits,
    RoomType,
    CancelationPolicy,
    Price,
    Note,
  } = req.body;

  new B2BSModel({
    HotelName,
    CheckIn,
    CheckOut,
    NumberOfPax,
    Nationality,
    NumberOfUnits,
    RoomType,
    CancelationPolicy,
    Price,
    Note,
  }).save((data) => res.json({ msg: data }));
  // .catch((Err) => res.json({ msg: Err }));
});

router.get("/", async (req, res) => {
  try {
    const Data = await B2BSModel.find({});

    res.json({ msg: Data });
  } catch (err) {
    res.json({ msg: err });
  }
});
router.delete("/", async (req, res) => {
  try {
    await B2BSModel.remove({})
      .then(() => res.json({ msg: "deleted all" }))
      .catch((err) => res.json({ msg: err }));
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
