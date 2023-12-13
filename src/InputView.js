import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_BRIDGE_LENGTH } from "./Constants.js";

const OutputView = {
  bridgeLength() {
    return MissionUtils.Console.readLineAsync(INPUT_BRIDGE_LENGTH);
  },
};

export default OutputView;
