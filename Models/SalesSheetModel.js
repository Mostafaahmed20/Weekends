const mongoose = require("mongoose");
const CurrencyOption = ["USD", "EUR", "GBP", "Kwd"];
const SalesSheetB2CSchema = new mongoose.Schema({
  TicketNumber: { type: Number },
  AgentName: { type: String },
  ProductType: { type: String },
  City: { type: String },
  ProductName: { type: String },
  GuestName: { type: String },
  Supplier: { type: String },
  SupplierCategory: { type: String },
  JuniperREF: { type: String },
  SupplierReference: { type: String },
  CheckInDate: { type: Date },
  CheckOutDate: { type: Date },
  Vouchernumber: { type: String },
  SalesRate: { type: Number },
  NetRate: { type: Number },
  Currency: { type: String, enum: CurrencyOption },
  ExchangeRate: { type: Number },
  NetRateINKWD: { type: Number },
  Profit: { type: Number },
  Remarks: { type: String },
});

SalesSheetB2CSchema.pre("save", async function (next) {
  const CounterModel = mongoose.model(
    "Counter",
    new mongoose.Schema({ count: Number })
  );
  let Counter = await CounterModel.findOneAndUpdate(
    {},
    { $inc: { count: 1 } },
    { new: true, upsert: true }
  );
  this.Vouchernumber = `Safa22/${Counter.count}`;
  next();
});

const SalesSheetB2CModel = mongoose.model("SalesSheet", SalesSheetB2CSchema);

module.exports = SalesSheetB2CModel;
