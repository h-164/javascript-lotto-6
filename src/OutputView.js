import { MissionUtils } from "@woowacourse/mission-utils";
import {
  GAME_START,
  LENGTH_RANGE_ERROR,
  MOVE_BRIDGE_ERROR,
} from "./Constants.js";

const OutputView = {
  gameStart() {
    MissionUtils.Console.print(GAME_START);
  },

  lengthError() {
    MissionUtils.Console.print(LENGTH_RANGE_ERROR);
  },

  moveError() {
    MissionUtils.Console.print(MOVE_BRIDGE_ERROR);
  },

  progress(up, down) {
    MissionUtils.Console.print(up + "]");
    MissionUtils.Console.print(down + "]");
  },
};

export default OutputView;
