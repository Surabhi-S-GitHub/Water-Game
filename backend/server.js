const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enables CORS to allow frontend requests
app.use(express.json()); // Parses incoming JSON requests

// Dummy API Data
const games = [
  {
    id: 1,
    title: 'Water Saver Challenge',
    points: 150,
    description: 'Learn how to conserve water in fun ways.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Groundwater Guardian',
    points: 200,
    description: 'A game to raise awareness about groundwater conservation.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Save the Reservoir',
    points: 180,
    description: 'A puzzle game based on maintaining reservoirs.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Rainwater Ruler',
    points: 120,
    description: 'Learn about rainwater harvesting strategies.',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

// API Endpoint to Get Games
app.get('/games', (req, res) => {
  res.json(games);
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
