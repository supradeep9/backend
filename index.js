const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://admin:xFmfuLMEXtB99Y7E@cluster0.ivw26jc.mongodb.net/netflixx?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((conn) => {
    console.log(conn);
    console.log("success");
  });
app.use(express.json());
app.listen(3000, () => {
  console.log("server has stared");
});
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});
const India = mongoose.model("IndianTeams", movieSchema);

app.get("/", async function (req, res) {
  const data = await India.find();

  res.send(data);
});
app.post("/", async function (req, res) {
  const data = await India.create(req.body);

  res.json({
    message: "success",
    data,
  });
});
