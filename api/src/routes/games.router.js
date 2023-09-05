const express = require('express');
const GamesService = require('../services/games.service');

const router = express.Router();
const service = new GamesService();

router.get('/', async (req, res) => {
  const games = await service.getGames();
  res.status(200).json(games);
});

router.post('/', async (req, res) => {
  const { body } = req;
  const newBook = await service.createBook(body);
  res.status(201).json(newBook);
});

module.exports = router;
