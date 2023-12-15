import { MissionUtils } from "@woowacourse/mission-utils";
import { START_MESSAGE } from "./Constants.js";

const OutputView = {
  start() {
    MissionUtils.Console.print(START_MESSAGE);
  },
};

export default OutputView;
