import { MissionUtils } from "@woowacourse/mission-utils";
import {
  COACH_NAME_ERROR,
  COACH_NUMBER_ERROR,
  COACH_SAME_ERROR,
  HATE_NAME_ERROR,
  HATE_NUMBER_ERROR,
  HATE_SAME_ERROR,
} from "./Constants.js";
import { WESTERN, JAPAN, KOREA, CHINA, ASIA } from "./Menu.js";
import OutputView from "./OutputView.js";

const Validator = {
  coachName(input) {
    input.forEach((name) => {
      if (name.length > 4 || name.length < 2) {
        OutputView.coachNameError();
        throw new Error(COACH_NAME_ERROR);
      }
    });
  },

  coachNumber(input) {
    if (input.length > 5 || input.length < 2) {
      OutputView.coachNumberError();
      throw new Error(COACH_NUMBER_ERROR);
    }
  },

  coachSame(input) {
    const set = new Set(input);

    if (input.length !== set.size) {
      OutputView.coachSameError();
      throw new Error(COACH_SAME_ERROR);
    }
  },

  hateName(input) {
    input.forEach((name) => {
      if (
        !JAPAN.includes(name) &&
        !KOREA.includes(name) &&
        !CHINA.includes(name) &&
        !ASIA.includes(name) &&
        !WESTERN.includes(name) &&
        ""
      ) {
        OutputView.hateNameError();
        throw new Error(HATE_NAME_ERROR);
      }
    });
  },

  hateNumber(input) {
    if (input.length > 2) {
      OutputView.hateNumberError();
      throw new Error(HATE_NUMBER_ERROR);
    }
  },

  hateSame(input) {
    const set = new Set(input);

    if (input.length !== set.size) {
      OutputView.hateSameError();
      throw new Error(HATE_SAME_ERROR);
    }
  },
};

export default Validator;
