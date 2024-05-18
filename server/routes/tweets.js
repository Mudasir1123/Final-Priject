// server/routes/tweets.js

const express = require('express');
const router = express.Router();
const Tweet = require('../models/Tweet');

// POST route to add a new tweet
router.post('/', async (req, res) => {
    try {
        const { content } = req.body;

        // Create a new tweet using the Tweet model
        const newTweet = new Tweet({
            content
        });

        // Save the tweet to the database
        await newTweet.save();

        res.status(201).json({ message: 'Tweet created successfully', tweet: newTweet });
    } catch (error) {
        console.error('Error creating tweet:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE route to delete a tweet by ID
router.delete('/:id', async (req, res) => {
    const tweetId = req.params.id;

    try {
        // Find the tweet by ID and delete it from MongoDB
        await Tweet.findByIdAndDelete(tweetId);
        res.status(204).send(); // Send a success response
    } catch (error) {
        console.error('Error deleting tweet:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
