import Validator from "./Validator.js";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

const InputHandler = {
  async bridgeLength() {
    const LENGTH = +(await InputView.bridgeLength());

    try {
      Validator.bridgeLength(LENGTH);
      return LENGTH;
    } catch (error) {
      OutputView.lengthError();
      return this.bridgeLength();
    }
  },

  async moveBridge() {
    const MOVE = await InputView.moveBridge();

    try {
      Validator.moveBridge(MOVE);
      return MOVE;
    } catch (error) {
      OutputView.moveError();
      return this.moveBridge();
    }
  },

  async reGame() {
    const RE_GAME = await InputView.reGame();

    try {
      Validator.reGame(RE_GAME);
      return RE_GAME;
    } catch (error) {
      OutputView.reGameError();
      return this.reGame();
    }
  },
};

export default InputHandler;
