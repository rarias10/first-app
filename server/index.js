// server/index.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
