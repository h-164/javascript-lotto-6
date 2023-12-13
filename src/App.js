import OutputView from "./OutputView.js";
import InputView from "./InputView.js";
import Validator from "./Validator.js";
import InputHandler from "./InputHandler.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Bridge from "./Bridge.js";

class App {
  #gameCount;

  constructor() {
    this.#gameCount = 0;
  }

  async moveBridge(bridge) {
    const MOVE = await InputHandler.moveBridge();
    if (bridge.check(MOVE)) {
      return this.moveBridge(bridge);
    }
  }

  async play() {
    OutputView.gameStart();
    const LENGTH = await InputHandler.bridgeLength();
    const bridge = new Bridge(LENGTH);
    this.moveBridge(bridge);
  }
}

export default App;
