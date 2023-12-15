import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";
import { INPUT_NAME_MESSAGE } from "./Constants.js";

const InputView = {
  async coachName() {
    let names = await MissionUtils.Console.readLineAsync(INPUT_NAME_MESSAGE);
    const NAMEMS = names.split(",");

    Validator.coachName(NAMEMS);
  },
};

export default InputView;
