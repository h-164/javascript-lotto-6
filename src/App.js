import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import Coach from "./Coach.js";

class App {
  async play() {
    OutputView.start();
    const NAMES = await InputView.coachName();

    for (let i = 0; i < NAMES.length; i++) {
      new Coach(NAMES[i]);
      await InputView.hateMenu(NAMES[i]);
    }
  }
}

export default App;
