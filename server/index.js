const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Wow! This is amazing" });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
