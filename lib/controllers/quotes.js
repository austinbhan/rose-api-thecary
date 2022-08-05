const { Router } = require('express');
const { Quote } = require('../models/Quote');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const data = await Quote.insert(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
