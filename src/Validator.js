import { LENGTH_RANGE_ERROR } from "./Constants.js";

const Validator = {
  bridgeLength(input) {
    if (input < 3 || input > 20) {
      throw new Error(LENGTH_RANGE_ERROR);
    }

    if (input !== parseInt(input)) {
      throw new Error(LENGTH_RANGE_ERROR);
    }
  },
};

export default Validator;
