import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 3009;

express.json();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Response sent");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
