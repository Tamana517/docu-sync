const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/docs", require("./routes/docRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
