import { MissionUtils } from "@woowacourse/mission-utils";
import inputMoney from "./InputView.js";
import Money from "./Money.js";

class App {
  async play() {
    const INPUT_MONEY = await inputMoney();
    new Money(INPUT_MONEY);
  }
}

export default App;

const app = new App();
app.play();
