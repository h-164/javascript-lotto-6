import { MissionUtils } from "@woowacourse/mission-utils";
import {
  START_MESSAGE,
  COACH_NAME_ERROR,
  COACH_NUMBER_ERROR,
  COACH_SAME_ERROR,
  HATE_NUMBER_ERROR,
  HATE_SAME_ERROR,
  HATE_NAME_ERROR,
} from "./Constants.js";

const OutputView = {
  start() {
    MissionUtils.Console.print(START_MESSAGE);
  },

  coachNumberError() {
    MissionUtils.Console.print(COACH_NUMBER_ERROR);
  },

  coachNameError() {
    MissionUtils.Console.print(COACH_NAME_ERROR);
  },

  coachSameError() {
    MissionUtils.Console.print(COACH_SAME_ERROR);
  },

  hateNumberError() {
    MissionUtils.Console.print(HATE_NUMBER_ERROR);
  },

  hateSameError() {
    MissionUtils.Console.print(HATE_SAME_ERROR);
  },

  hateNameError() {
    MissionUtils.Console.print(HATE_NAME_ERROR);
  },
};

export default OutputView;
