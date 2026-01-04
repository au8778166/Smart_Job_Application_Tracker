import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true
  },

  appliedDate: {
    type: Date,
    default: Date.now
  },

  currentStatus: {
    type: String,
    enum: ["Applied", "Shortlisted", "Interview", "Offer", "Accepted", "Rejected"],
    default: "Applied"
  },

  expectedCTC: Number,
  notes: String
}, { timestamps: true });

applicationSchema.index({ userId: 1 });
applicationSchema.index({ currentStatus: 1 });
applicationSchema.index({ appliedDate: 1 });

export default mongoose.model("Application", applicationSchema);
