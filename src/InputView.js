import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_BRIDGE_LENGTH, MOVE_BRIDGE, RE_GAME } from "./Constants.js";

const InputView = {
  bridgeLength() {
    return MissionUtils.Console.readLineAsync("\n" + INPUT_BRIDGE_LENGTH);
  },

  moveBridge() {
    return MissionUtils.Console.readLineAsync("\n" + MOVE_BRIDGE);
  },

  reGame() {
    return MissionUtils.Console.readLineAsync("\n" + RE_GAME);
  },
};

export default InputView;
