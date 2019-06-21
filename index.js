const express = require("express");
const server = express();

server.use(express.json());

let games = [
  {
    id: 1,
    title: "Pacman",
    genre: "Arcade",
    releaseYear: 1980
  },
  {
    id: 2,
    title: "Oblivion",
    genre: "RPG",
    releaseYear: 2006
  },
  {
    id: 3,
    title: "Fable",
    genre: "RPG",
    releaseYear: 2004
  },
  {
    id: 4,
    title: "Halo 3",
    genre: "FPS",
    releaseYear: 2007
  },
  {
    id: 5,
    title: "Brawlhalla",
    genre: "MMORPG",
    releaseYear: 2015
  }
];

let id = 5;

server.get("/games", (req, res) => {
  res.status(200).json(games);
});

server.get("/games/:id", (req, res) => {
  const { id } = req.params;
  let game = games.filter(game => game.id === id);
  if (game.length === 0) {
    res.status(404).json({ error: "Game not found." });
  }
  game = game[0];
  res.status(200).json(game);
});

server.post("/games", (req, res) => {
  const game = req.body;
  if (!game.title || !game.genre) {
    return res
      .status(422)
      .json({ error: "Game must have a title and a genre." });
  }
  game.id = ++id;
  games.push(game);
  res.status(201).json(games);
});

module.exports = server;
