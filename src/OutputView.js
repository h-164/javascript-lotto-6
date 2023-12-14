import { MissionUtils } from "@woowacourse/mission-utils";
import {
  CLOSE,
  GAME_RESULT,
  GAME_START,
  LENGTH_RANGE_ERROR,
  LOSE_MESSAGE,
  MOVE_BRIDGE_ERROR,
  RE_GAME_ERROR,
  TOTAL_COUNT,
  WIN_MESSAGE,
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
    MissionUtils.Console.print(up + CLOSE);
    MissionUtils.Console.print(down + CLOSE);
  },

  win(up, down) {
    MissionUtils.Console.print("\n" + GAME_RESULT);
    this.progress(up, down);
    MissionUtils.Console.print("\n" + WIN_MESSAGE);
  },

  over(up, down) {
    MissionUtils.Console.print("\n" + GAME_RESULT);
    this.progress(up, down);
    MissionUtils.Console.print("\n" + LOSE_MESSAGE);
  },

  count(count) {
    MissionUtils.Console.print(TOTAL_COUNT + count);
  },

  reGameError() {
    MissionUtils.Console.print(RE_GAME_ERROR);
  },
};

export default OutputView;
