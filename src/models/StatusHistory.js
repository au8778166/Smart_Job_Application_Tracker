import mongoose from "mongoose";

const statusHistorySchema = new mongoose.Schema({
  applicationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Application",
    required: true
  },

  status: {
    type: String,
    enum: ["Applied", "Shortlisted", "Interview", "Offer", "Accepted", "Rejected"],
    required: true
  },

  changedAt: {
    type: Date,
    default: Date.now
  }
});

statusHistorySchema.index({ applicationId: 1 });

export default mongoose.model("StatusHistory", statusHistorySchema);
