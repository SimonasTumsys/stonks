const mongoose = require("mongoose");

const actionSchema = mongoose.Schema({
  requestTimestamp: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  closingPrices: [
    {
      type: Number,
      required: true,
    },
  ],
  candleTimestamps: [
    {
      type: Number,
      required: true,
    },
  ],
  dateFrom: {
    type: String,
    required: true,
  },
  dateTo: {
    type: String,
    required: true,
  },
});

const Action = mongoose.model("Action", actionSchema);

module.exports = Action;
