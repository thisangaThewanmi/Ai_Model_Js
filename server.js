const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const PORT = 5000; // You can change the port as needed

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Placeholder for AI response handling
app.post('/api/message', (req, res) => {
    const message = req.body.message;

    // Call your AI response function here
    const response = getAIResponse(message);

    res.json({ response });
});

// Function to simulate AI response
const getAIResponse = (message) => {
    // Simulating a response (you can replace this with actual logic)
    return `AI Response to: ${message}`;
};

// Start server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
