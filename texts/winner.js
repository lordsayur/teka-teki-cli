import gradient from "gradient-string";
import figlet from "figlet";

export function winner(playerName) {
  console.clear();
  const msg = `Tahniah , ${playerName} !\n Biskita dapat \n $ 1, 0 0 0 , 0 0 0`;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}
