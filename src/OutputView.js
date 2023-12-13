import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_START, LENGTH_RANGE_ERROR } from "./Constants.js";

const OutputView = {
  gameStart() {
    MissionUtils.Console.print(GAME_START);
  },

  lengthError() {
    MissionUtils.Console.print(LENGTH_RANGE_ERROR);
  },
};

export default OutputView;
