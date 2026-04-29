const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:123456654321@cluster0.bfntqrz.mongodb.net/doc-editor");

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/docs", require("./routes/docRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));