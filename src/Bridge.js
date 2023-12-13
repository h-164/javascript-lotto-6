import { MissionUtils } from "@woowacourse/mission-utils";

class Bridge {
  #length;
  #bridge;

  constructor(input) {
    this.#length = input;
    this.#bridge = this.#crossable();
    console.log(this.#bridge);
  }

  #crossable() {
    let bridge = [];
    for (let i = 0; i < this.#length; i++) {
      bridge.push(Math.round(Math.random()));
    }

    return bridge;
  }

  #test() {
    MissionUtils.Console.print(this.#length);
  }
}

export default Bridge;
