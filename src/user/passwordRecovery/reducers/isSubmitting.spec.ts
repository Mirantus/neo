import { PASSWORD_RECOVERY, PASSWORD_RECOVERY_ERROR, PASSWORD_RECOVERY_OK } from "../constants";
import reducer, { initialState } from "./isSubmitting";

test("Password recovery reducer isSubmitting", () => {
    // PASSWORD_RECOVERY
    const passwordRecoveryAction = { type: PASSWORD_RECOVERY, payload: null };
    expect(reducer(initialState, passwordRecoveryAction)).toBe(true);

    // PASSWORD_RECOVERY_OK
    const passwordRecoveryOkAction = { type: PASSWORD_RECOVERY_OK, payload: null };
    expect(reducer(initialState, passwordRecoveryOkAction)).toBe(initialState);

    // PASSWORD_RECOVERY_ERROR
    const passwordRecoveryErrorAction = { type: PASSWORD_RECOVERY_ERROR, payload: null };
    expect(reducer(initialState, passwordRecoveryErrorAction)).toBe(initialState);

    // default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
