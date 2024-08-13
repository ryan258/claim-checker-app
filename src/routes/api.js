const express = require('express');
const ollamaService = require('../services/ollamaService');
const responseParser = require('../utils/responseParser');
const logger = require('../utils/logger');

const router = express.Router();

router.post('/check-claim', async (req, res) => {
  try {
    const { claim } = req.body;
    if (!claim) {
      return res.status(400).json({ error: 'Claim is required' });
    }

    const aiResponse = await ollamaService.checkClaim(claim);
    console.log('AI Response in api.js:', aiResponse);
    const parsedResponse = responseParser.parse(aiResponse);

    // Log the result
    await logger.log(claim, parsedResponse);

    res.json(parsedResponse);
  } catch (error) {
    console.error('Error in /check-claim route:', error);
    res.status(500).json({ 
      error: 'An error occurred while processing the claim',
      details: error.message
    });
  }
});

module.exports = router;