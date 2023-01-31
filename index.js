require("dotenv").config();

const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

BASE_URL = "https://api.football-data.org/v4/";
API_TOKEN = process.env.API_TOKEN;

app.use("/api/areas", require("./routes/areas"));
app.use("/api/competitions", require("./routes/competitions"));
app.use("/api/matches", require("./routes/matches"));
app.use("/api/persons", require("./routes/persons"));
app.use("/api/teams", require("./routes/teams"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));

  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const PORT = process.env.PROT || 5678;
app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}/`));
