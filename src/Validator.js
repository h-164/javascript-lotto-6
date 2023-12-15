import { COACH_NAME_ERROR, COACH_NUMBER_ERROR } from "./Constants.js";

const Validator = {
  coachName(input) {
    if (input.length > 5 || input.length < 2) {
      throw new Error(COACH_NUMBER_ERROR);
    }

    input.forEach((name) => {
      if (name.length > 4 || name.length < 2) {
        throw new Error(COACH_NAME_ERROR);
      }
    });
  },
};

export default Validator;
