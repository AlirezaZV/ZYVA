const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = 5000; // You can set your preferred port

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Endpoint to handle chatbot messages
app.post("/api/chatbot", async (req, res) => {
  const { input, conversationHistory } = req.body;

  if (!input || typeof input !== "string") {
    return res.status(400).json({ error: "Invalid input provided." });
  }

  try {
    // Call Hugging Face API
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/google/mt5-small", // Replace with your desired model endpoint
      { inputs: input}, // Construct the input for the model
      {
        headers: {
          Authorization: `Bearer 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`, // Use your Hugging Face API key
          "Content-Type": "application/json",
        },
        params: { max_length: 100 },
      }
    );
console.log(response);

    const botResponse = response.data[0].generated_text;

    res.json({ botResponse });
  } catch (error) {
    console.error("Error while fetching response from Hugging Face:", error.message);
    res.status(500).json({ error: "Failed to fetch response from the API." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
