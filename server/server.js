const express = require("express");
const OpenAI = require("openai");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // For parsing application/json

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Make sure to set your OpenAI API key in .env
});

// Define the API endpoint for image generation
app.post("/api/generate-image", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1, // Request 1 image
      size: "1024x1024",
    });

    const images = response.data.map((image) => image.url);
    res.json({ images });
  } catch (error) {
    console.error("Error generating images:", error);

    // Check for specific error details, if available
    const errorMessage =
      error.response?.data?.error?.message ||
      "Failed to generate images. Please try again later.";

    res.status(500).json({ error: errorMessage });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
