const mongoose = require("mongoose");

const travelPlanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
});

const TravelPlan = mongoose.model("TravelPlan", travelPlanSchema);

module.exports = TravelPlan;
