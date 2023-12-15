import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";
import { INPUT_NAME_MESSAGE } from "./Constants.js";

const InputView = {
  async coachName() {
    let names = await MissionUtils.Console.readLineAsync(INPUT_NAME_MESSAGE);
    const NAMEMS = names.split(",");

    try {
      Validator.coachName(NAMEMS);
      Validator.coachNumber(NAMEMS);
      Validator.coachSame(NAMEMS);
    } catch (error) {
      return this.coachName();
    }
  },
};

export default InputView;
