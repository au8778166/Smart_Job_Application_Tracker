import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },

  jobType: {
    type: String,
    enum: ["Full-Time", "Internship", "Contract"]
  },

  location: String,
  source: String,

  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, { timestamps: true });

jobSchema.index({ userId: 1 });

export default mongoose.model("Job", jobSchema);
