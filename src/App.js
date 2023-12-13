import OutputView from "./OutputView.js";
import InputView from "./InputView.js";
import Validator from "./Validator.js";
import InputHandler from "./InputHandler.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Bridge from "./Bridge.js";
import { WIN, LOSE, RE } from "./Constants.js";

class App {
  #gameCount;

  constructor() {
    this.#gameCount = 1;
  }

  async moveBridge(bridge) {
    const MOVE = await InputHandler.moveBridge();
    const RESULT = bridge.check(MOVE);

    if (RESULT === RE) {
      return this.moveBridge(bridge);
    }

    if (RESULT === WIN) {
      OutputView.count(this.#gameCount);
    }

    if (RESULT === LOSE) {
      OutputView.count(this.#gameCount);
      this.reGame(bridge);
    }
  }

  async reGame(bridge) {
    const RE_GAME = await InputHandler.reGame();

    if (RE_GAME === "R") {
      this.#gameCount++;
      this.moveBridge(bridge);
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
