import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_NAME_MESSAGE } from "./Constants.js";

const InputView = {
  async coachName() {
    await MissionUtils.Console.readLineAsync(INPUT_NAME_MESSAGE);
  },
};

export default InputView;
