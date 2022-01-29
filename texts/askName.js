import inquirer from "inquirer";

export async function askName() {
  const answers = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "Nama kita?",
    default() {
      return "Awang B";
    },
  });

  return answers.player_name;
}
