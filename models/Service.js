const mongoose = require("mongoose");
const serviceSchema = new mongoose.Schema({
  name: String,
  address: String,
  price: Number,
  photos: [String],
  perks: [String],
  description: String,
  
  extraInfo: String,
  checkIn: String,
  checkOut: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Ensure this line is present
});
const ServiceModel = mongoose.model("Service", serviceSchema);

module.exports = ServiceModel;
