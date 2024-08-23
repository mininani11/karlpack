const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Subscribe to YouTube
router.post('/subscribe', async (req, res) => {
    const { telegramId } = req.body;

    try {
        let user = await User.findOne({ telegramId });
        if (!user) {
            user = new User({ telegramId });
        }
        user.shares += 1000; // Adding shares for subscribing
        await user.save();
        res.json({ message: 'Subscription recorded!', shares: user.shares });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Complete video task
router.post('/complete-video', async (req, res) => {
    const { telegramId } = req.body;

    try {
        let user = await User.findOne({ telegramId });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        user.shares += 500; // Adding shares for watching video
        await user.save();
        res.json({ message: 'Video watched!', shares: user.shares });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Join Telegram channel task
router.post('/join-telegram', async (req, res) => {
    const { telegramId } = req.body;

    try {
        let user = await User.findOne({ telegramId });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        user.shares += 500; // Adding shares for joining Telegram
        await user.save();
        res.json({ message: 'Telegram channel joined!', shares: user.shares });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
