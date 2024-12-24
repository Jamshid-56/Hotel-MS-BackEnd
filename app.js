// Import necessary modules
const express = require('express');
const cors = require('cors');
app.use(cors()); // Enable CORS for all requests
const path = require('path');




// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON requests

// Serve React frontend (if build exists in the project folder)
app.use(express.static(path.join(__dirname, "build")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Example API route
app.get('/api', (req, res) => {
    res.json({ message: 'Backend is running!' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});