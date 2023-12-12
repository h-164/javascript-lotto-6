import { MONEY_ERROR } from "./Constatns.js";

class Validator {
  static money(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(MONEY_ERROR);
    }

    if (amount <= 0) {
      throw new Error(MONEY_ERROR);
    }
  }
}

export default Validator;
