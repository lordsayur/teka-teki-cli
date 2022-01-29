import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { sleep } from "./index.js";

export async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow("Teka Teki CLI \n");

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgYellow("Cana main")}
    Cuba jawab soalan teka teki ani
    Kalau biskita dapat jawab, kita dapat hadiah
    Kalau inda, kita kana ${chalk.bgRed("boo!")}
    Selamat mencuba...
  `);
}
