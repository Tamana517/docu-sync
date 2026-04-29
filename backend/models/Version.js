const mongoose = require("mongoose");

const versionSchema = new mongoose.Schema({
  documentId: mongoose.Schema.Types.ObjectId,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Version", versionSchema);