import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import { sleep } from "./index.js";

export async function question1() {
  const answers = await inquirer.prompt({
    name: "question_1",
    type: "input",
    message: "Banyak banyak 🍔, 🍔 apa yang paling nyaman?\n",
  });

  return answers.question_1;
}

export async function handleQuestion1Answer(answer, playerName) {
  const isCorrect = answer.match(/be+ga+ru+/i);

  const spinner = createSpinner("Hmm...").start();

  await sleep();

  if (isCorrect) {
    spinner.success({
      text: `Ngam! Tahniah ${playerName}. Jawapan kita lurus. Hadiah kita...`,
    });
    await sleep();
    return true;
  } else {
    spinner.error({ text: `💀💀💀 Boo ${playerName}! Sila cuba lagi.` });
    return false;
  }
}
