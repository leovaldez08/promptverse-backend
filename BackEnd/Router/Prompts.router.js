const express = require("express");
const ChatGpt = require("../FrontEnd/src/Components/CardData/ChatGpt.json");
const Midjourney = require("../FrontEnd/src/Components/CardData/Midjourney.json");
const DallE = require("../FrontEnd/src/Components/CardData/DallE.json");
const StableDiffusion = require("../FrontEnd/src/Components/CardData/StableDiffusion.json");

const prompt = express.Router();

prompt.get("/chatgpt", (req, res) => {
  res.json(ChatGpt);
});

prompt.get("/midjourney", (req, res) => {
  res.json(Midjourney);
});

prompt.get("/stablediffusion", (req, res) => {
  res.json(StableDiffusion);
});

prompt.get("/dalle", (req, res) => {
  res.json(DallE);
});

prompt.post("")

module.exports = prompt;
