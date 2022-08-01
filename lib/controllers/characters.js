const { Router } = require('express');
const Character = require('../models/Character');
// const router = Router();
module.exports = Router().get('/', async (req, res) => {
  const characters = await Character.getAll();
  const ids = characters.map((character) => ({ id: character.id, first_name: character.first_name, last_name: character.last_name, quotes: character.quotes }));
  console.log(ids);
  res.json(ids);
});

// module.exports = router;
