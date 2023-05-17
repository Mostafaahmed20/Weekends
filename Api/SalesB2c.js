const SalesSheetB2CModel = require("../Models/SalesSheetModel");

const Route = require("express").Router();

Route.post("/", async (req, res) => {
  const {
    TicketNumber,
    AgentName,
    ProductType,
    GuestName,
    Supplier,
    SupplierCategory,
    JuniperREF,
    SupplierReference,
    CheckInDate,
    CheckOutDate,
    Vouchernumber,
    SalesRate,
    NetRate,
    Currency,
    ExchangeRate,
    NetRateINKWD,
    Profit,
    Remarks,
  } = req.body;
  try {
    await new SalesSheetB2CModel({
      TicketNumber,
      AgentName,
      ProductType,
      GuestName,
      Supplier,
      SupplierCategory,
      JuniperREF,
      SupplierReference,
      CheckInDate,
      CheckOutDate,
      Vouchernumber,
      SalesRate,
      NetRate,
      Currency,
      ExchangeRate,
      NetRateINKWD,
      Profit,
      Remarks,
    }).save((data) => res.json({ msg: data }));
  } catch (err) {
    res.json({ msg: err });
  }
});

Route.get("/", async (req, res) => {
  try {
    await SalesSheetB2CModel.find({}).then((data) => res.json({ msg: data }));
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = Route;
