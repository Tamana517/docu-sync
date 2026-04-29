const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
  title: String,
  content: { type: String, default: "" },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  collaborators: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      role: { type: String, enum: ["viewer", "editor"], default: "viewer" }
    }
  ]
});

module.exports = mongoose.model("Document", docSchema);