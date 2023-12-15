import { MissionUtils } from "@woowacourse/mission-utils";
import {
  COACH_NAME_ERROR,
  COACH_NUMBER_ERROR,
  COACH_SAME_ERROR,
} from "./Constants.js";
import OutputView from "./OutputView.js";

const Validator = {
  coachName(input) {
    if (input.length > 5 || input.length < 2) {
      OutputView.coachNameError();
      throw new Error(COACH_NUMBER_ERROR);
    }
  },

  coachNumber(input) {
    input.forEach((name) => {
      if (name.length > 4 || name.length < 2) {
        OutputView.coachNumberError();
        throw new Error(COACH_NAME_ERROR);
      }
    });
  },

  coachSame(input) {
    const set = new set(input);
    if (input.length !== set.size) {
      OutputView.coachSameError();
      throw new Error(COACH_SAME_ERROR);
    }
  },
};

export default Validator;
