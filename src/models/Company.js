import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },

  location: String,
  website: String,

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, { timestamps: true });

companySchema.index({ userId: 1 });

export default mongoose.model("Company", companySchema);
