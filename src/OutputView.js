import { MissionUtils } from "@woowacourse/mission-utils";
import {
  START_MESSAGE,
  COACH_NAME_ERROR,
  COACH_NUMBER_ERROR,
  COACH_SAME_ERROR,
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
};

export default OutputView;
