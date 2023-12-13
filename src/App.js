import OutputView from "./OutputView.js";
import InputView from "./InputView.js";

class App {
  async play() {
    OutputView.gameStart();
    InputView.bridgeLength();
  }
}

export default App;
