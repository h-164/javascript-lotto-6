import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "./OutputView.js";
import {
  WIN,
  LOSE,
  RE,
  UP,
  OPEN,
  CORRECT,
  BLANK,
  WALL,
  DOWN,
  WRONG,
} from "./Constants.js";

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
    this.#up = OPEN;
    this.#down = OPEN;
  }

  #crossable() {
    let bridge = [];
    for (let i = 0; i < this.#length; i++) {
      bridge.push(Math.round(Math.random()));
    }

    return bridge;
  }

  check(input) {
    if (this.#bridge[this.#position] === 1 && input === UP) {
      return this.#move();
    }

    if (this.#bridge[this.#position] === 0 && input === DOWN) {
      return this.#move();
    }

    return this.#stop();
  }

  #stop() {
    if (this.#bridge[this.#position] === 0) {
      this.#up += WRONG;
      this.#down += BLANK;
    }

    if (this.#bridge[this.#position] === 1) {
      this.#up += BLANK;
      this.#down += WRONG;
    }

    OutputView.progress(this.#up, this.#down);
    return this.#gameOver();
  }

  #gameOver() {
    OutputView.over(this.#up, this.#down);
    this.#up = OPEN;
    this.#down = OPEN;
    this.#position = 0;
    return LOSE;
  }

  #move() {
    if (this.#bridge[this.#position] === 1) {
      this.#up += CORRECT;
      this.#down += BLANK;
    }
    if (this.#bridge[this.#position] === 0) {
      this.#up += BLANK;
      this.#down += CORRECT;
    }

    OutputView.progress(this.#up, this.#down);
    this.#position++;
    return this.#continue();
  }

  #continue() {
    if (this.#position !== this.#length) {
      this.#up += WALL;
      this.#down += WALL;
      return RE;
    }

    if (this.#position === this.#length) {
      OutputView.win(this.#up, this.#down);
      return WIN;
    }
  }
}

export default Bridge;
