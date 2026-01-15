import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.get("/test", (req, res) => {
  res.json({ Name: "jui" });
});

app.listen(PORT, () => {
  console.log(`✅ Server is listening on http://localhost:${PORT}`);
});
