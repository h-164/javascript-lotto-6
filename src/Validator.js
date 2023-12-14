import {
  LENGTH_RANGE_ERROR,
  MOVE_BRIDGE_ERROR,
  RE_GAME_ERROR,
  UP,
  DOWN,
  QUIT,
  RE_START,
} from "./Constants.js";

const Validator = {
  bridgeLength(input) {
    if (input < 3 || input > 20) {
      throw new Error(LENGTH_RANGE_ERROR);
    }

    if (input !== parseInt(input)) {
      throw new Error(LENGTH_RANGE_ERROR);
    }
  },

  moveBridge(input) {
    if (input !== DOWN && input !== UP) {
      throw new Error(MOVE_BRIDGE_ERROR);
    }
  },

  reGame(input) {
    if (input !== QUIT && input !== RE_START) {
      throw new Error(RE_GAME_ERROR);
    }
  },
};

export default Validator;
