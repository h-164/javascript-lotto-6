import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_BRIDGE_LENGTH } from "./Constants.js";

const InputView = {
  bridgeLength() {
    return MissionUtils.Console.readLineAsync(INPUT_BRIDGE_LENGTH);
  },
};

export default InputView;
