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
