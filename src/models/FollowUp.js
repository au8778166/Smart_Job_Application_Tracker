import mongoose from "mongoose";

const followUpSchema = new mongoose.Schema({
  applicationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Application",
    required: true
  },

  followUpDate: {
    type: Date,
    required: true
  },

  message: String,
  completed: { type: Boolean, default: false }
});

followUpSchema.index({ followUpDate: 1 });

export default mongoose.model("FollowUp", followUpSchema);
