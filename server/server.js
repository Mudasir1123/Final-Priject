// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const tweetsRouter = require('./routes/tweets'); // Import tweetsRouter
const Tweet = require('./models/Tweet'); // Import the Tweet model

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect('mongodb+srv://malikadil3493:QN3RYQDgvzCKQEGl@cluster0.4rlgcs6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('MongoDB connected'));

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/tweets', tweetsRouter); // Use tweetsRouter for /api/tweets requests

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/api/tweets', async (req, res) => {
    try {
        // Fetch tweets from MongoDB (assuming you have a Tweet model)
        const tweets = await Tweet.find(); // Replace Tweet with your Mongoose model
        console.log('Fetched tweets from database',tweets);
        // Calculate the tweet count
        const tweetCount = tweets.length;

        // Send the tweet count as JSON response
        res.json({ tweets: tweets, tweetCount: tweetCount });
    } catch (error) {
        console.error('Error fetching tweets:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
