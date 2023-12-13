import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_BRIDGE_LENGTH, MOVE_BRIDGE, RE_GAME } from "./Constants.js";

const InputView = {
  bridgeLength() {
    return MissionUtils.Console.readLineAsync(INPUT_BRIDGE_LENGTH);
  },

  moveBridge() {
    return MissionUtils.Console.readLineAsync(MOVE_BRIDGE);
  },

  reGame() {
    return MissionUtils.Console.readLineAsync(RE_GAME);
  },
};

export default InputView;
