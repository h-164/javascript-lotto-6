import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "./OutputView.js";
import { WIN, LOSE, RE } from "./Constants.js";
import App from "./App.js";

class Bridge {
  #length;
  #bridge;
  #position;
  #up;
  #down;

  constructor(input) {
    this.#position = 0;
    this.#length = input;
    this.#bridge = this.#crossable();
    this.#up = "[";
    this.#down = "[";
    console.log(this.#bridge);
  }

  #crossable() {
    let bridge = [];
    for (let i = 0; i < this.#length; i++) {
      bridge.push(Math.round(Math.random()));
    }

    return bridge;
  }

  check(input) {
    if (this.#bridge[this.#position] === 1 && input === "U") {
      return this.#move();
    }

    if (this.#bridge[this.#position] === 0 && input === "D") {
      return this.#move();
    }

    return this.#stop();
  }

  #stop() {
    if (this.#bridge[this.#position] === 0) {
      this.#up += " X ";
      this.#down += "   ";
    }

    if (this.#bridge[this.#position] === 1) {
      this.#up += "   ";
      this.#down += " X ";
    }

    OutputView.progress(this.#up, this.#down);
    return this.#gameOver();
  }

  #gameOver() {
    OutputView.over(this.#up, this.#down);
    this.#up = "[";
    this.#down = "[";
    this.#position = 0;
    return LOSE;
  }

  #move() {
    if (this.#bridge[this.#position] === 1) {
      this.#up += " O ";
      this.#down += "   ";
    }

    if (this.#bridge[this.#position] === 0) {
      this.#up += "   ";
      this.#down += " O ";
    }

    OutputView.progress(this.#up, this.#down);
    this.#position++;
    return this.#continue();
  }

  #continue() {
    if (this.#position !== this.#length) {
      return RE;
    }

    if (this.#position === this.#length) {
      OutputView.win(this.#up, this.#down);
      return WIN;
    }
  }

  #test() {
    MissionUtils.Console.print(this.#length);
  }
}

export default Bridge;
