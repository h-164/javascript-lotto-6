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

  win(up, down) {
    MissionUtils.Console.print("게임 성공 여부: 성공");
    this.progress(up, down);
  },

  over(up, down) {
    MissionUtils.Console.print("게임 성공 여부: 실패");
    this.progress(up, down);
  },

  count(count) {
    MissionUtils.Console.print("총 시도한 횟수: " + count);
  },
};

export default OutputView;
