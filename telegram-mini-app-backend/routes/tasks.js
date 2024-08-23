const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Get user shares
router.get('/shares/:telegramId', async (req, res) => {
    const { telegramId } = req.params;

    try {
        const user = await User.findOne({ telegramId });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ shares: user.shares });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
