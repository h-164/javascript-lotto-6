import { MissionUtils } from "@woowacourse/mission-utils";
import {
  GAME_START,
  LENGTH_RANGE_ERROR,
  MOVE_BRIDGE_ERROR,
  RE_GAME_ERROR,
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
    MissionUtils.Console.print("\n" + "최종 게임 결과");
    this.progress(up, down);
    MissionUtils.Console.print("\n" + "게임 성공 여부: 성공");
  },

  over(up, down) {
    MissionUtils.Console.print("\n" + "최종 게임 결과");
    this.progress(up, down);
    MissionUtils.Console.print("\n" + "게임 성공 여부: 실패");
  },

  count(count) {
    MissionUtils.Console.print("총 시도한 횟수: " + count);
  },

  reGameError() {
    MissionUtils.Console.print(RE_GAME_ERROR);
  },
};

export default OutputView;
