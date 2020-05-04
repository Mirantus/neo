import { PASSWORD_RECOVERY, PASSWORD_RECOVERY_ERROR } from "../constants";
import reducer, { initialState } from "./error";

test("Password recovery reducer error", () => {
    // PASSWORD_RECOVERY
    const passwordRecoveryAction = { type: PASSWORD_RECOVERY, payload: null };
    expect(reducer(initialState, passwordRecoveryAction)).toBe(initialState);

    // PASSWORD_RECOVERY_ERROR
    const errorUserEditPayload = "test1";
    const errorUserEditAction = { type: PASSWORD_RECOVERY_ERROR, payload: errorUserEditPayload };
    expect(reducer(initialState, errorUserEditAction)).toEqual(errorUserEditPayload);

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
