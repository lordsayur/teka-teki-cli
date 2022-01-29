#!/usr/bin/env node

import {
  welcome,
  askName,
  question1,
  handleQuestion1Answer,
  winner,
} from "./texts/index.js";

let playerName;

await welcome();

playerName = await askName();

let isCorrect = false;
while (!isCorrect) {
  const answer = await question1();
  isCorrect = await handleQuestion1Answer(answer, playerName);
}

winner(playerName);
