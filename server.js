const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

const API_KEY = "newtons"; // your bearer key

app.get("/search", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.pokemonpricetracker.com/api/v2/cards",
      {
        params: {
          name: req.query.name
        },
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "API request failed" });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
