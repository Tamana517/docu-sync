const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { JWT_SECRET } = require("../config");

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ msg: "User already exists" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });

  if (!user) return res.status(400).json({ msg: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, JWT_SECRET);

  res.json({ token });
});

module.exports = router;