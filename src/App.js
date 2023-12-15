import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import Coach from "./Coach.js";

class App {
  async play() {
    OutputView.start();
    const NAMES = await InputView.coachName();

    for (let i = 0; i < NAMES.length; i++) {
      const coach = new Coach(NAMES[i]);
      coach.hate(await InputView.hateMenu(NAMES[i]));
    }
  }
}

export default App;
