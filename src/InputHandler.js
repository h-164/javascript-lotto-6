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
      OutputView.error();
      return this.bridgeLength();
    }
  },
};

export default InputHandler;
