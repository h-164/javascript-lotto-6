import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_START } from "./Constants.js";

const OutputView = {
  gameStart() {
    MissionUtils.Console.print(GAME_START);
  },
};

export default OutputView;
