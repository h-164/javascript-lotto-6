import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class App {
  async play() {
    OutputView.start();
    const NAMES = await InputView.coachName();
    // console.log(NAMES);
  }
}

export default App;
