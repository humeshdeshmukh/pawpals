const express = require('express');
const router = express.Router();

// GET /user/profile
router.get('/profile', (req, res) => {
    // Fetch user profile information
    res.json({ message: 'User profile information' });
});

module.exports = router;
