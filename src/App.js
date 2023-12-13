import OutputView from "./OutputView.js";
import InputView from "./InputView.js";
import Validator from "./Validator.js";
import InputHandler from "./InputHandler.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Bridge from "./Bridge.js";

class App {
  async play() {
    OutputView.gameStart();
    const LENGTH = await InputHandler.bridgeLength();
    const bridge = new Bridge(LENGTH);
    const MOVE = await InputHandler.moveBridge();
  }
}

export default App;
