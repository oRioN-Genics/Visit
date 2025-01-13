const mongoose = require("mongoose");

const travelPlanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  trip: {
    type: String,
    required: true,
  },
  userSelection: {
    type: Object,
    required: true,
  },
});

const TravelPlan = mongoose.model("TravelPlan", travelPlanSchema);

module.exports = TravelPlan;
