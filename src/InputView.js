import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";
import { INPUT_NAME_MESSAGE, INPUT_HATE_MESSAGE } from "./Constants.js";

const InputView = {
  async coachName() {
    let names = await MissionUtils.Console.readLineAsync(INPUT_NAME_MESSAGE);
    const NAMES = names.split(",");

    try {
      Validator.coachName(NAMES);
      Validator.coachNumber(NAMES);
      Validator.coachSame(NAMES);
    } catch (error) {
      return this.coachName();
    }

    return NAMES;
  },

  async hateMenu(name) {
    let hateMenus = await MissionUtils.Console.readLineAsync(
      "\n" + name + INPUT_HATE_MESSAGE
    );
    const HATE_MENUS = hateMenus.split(",");

    Validator.hateName(HATE_MENUS);
    Validator.hateNumber(HATE_MENUS);
    Validator.hateSame(HATE_MENUS);
  },
};

export default InputView;
