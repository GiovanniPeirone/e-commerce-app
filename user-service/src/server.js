const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const pool = require("./config/postgres-db")

const PORT  = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());







app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");

  res.json({
    message: "Conectado a PostgreSQL",
    time: result.rows[0].now,
  });
});


app.listen(PORT, () => {
  console.log("User-Service : Running in port : ", PORT)
})
