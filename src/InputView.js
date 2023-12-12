import { MissionUtils } from "@woowacourse/mission-utils";

export default function inputMoney() {
  const MONEY =
    MissionUtils.Console.readLineAsync("구입 금액을 입력해 주세요.");

  return MONEY;
}
