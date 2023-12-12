import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";

class Money {
  #money;

  constructor(amount) {
    this.#validate(amount);
    this.#money = amount;
  }

  #validate(amount) {
    Validator.money(amount);
  }
}

export default Money;
