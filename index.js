import cors from "cors";
import express from "express";

const PORT = 8080;
const users = [{ id: 1, name: "Ismoil" }];

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/users", (req, res) => {
  res.status(200).json({ data: users });
});

app.listen(PORT, () => {
  console.log("RUN SERVER: ", PORT);
});
