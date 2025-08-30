// server.js
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // ✅ Load environment variables

const app = express();

// ✅ Use frontend URL from .env for CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

// load users from file
function loadUsers() {
  if (!fs.existsSync("users.json")) return []; // ✅ avoid crash if file missing
  return JSON.parse(fs.readFileSync("users.json", "utf8"));
}

// save users to file
function saveUsers(users) {
  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
}

// signup (create new user)
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  let users = loadUsers();

  if (users.find(u => u.username === username)) {
    return res.json({ success: false, message: "User already exists" });
  }

  users.push({ username, password });
  saveUsers(users);

  res.json({ success: true, message: "Signup successful" });
});

// login (check existing user)
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  let users = loadUsers();

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});

// ✅ Use PORT from .env
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
