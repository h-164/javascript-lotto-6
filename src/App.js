import OutputView from "./OutputView.js";
import InputView from "./InputView.js";
import Validator from "./Validator.js";
import InputHandler from "./InputHandler.js";

class App {
  async play() {
    OutputView.gameStart();
    InputHandler.bridgeLength();
  }
}

export default App;
