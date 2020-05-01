import { CHANGE_PASSWORD, CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_OK } from "../constants";
import reducer, { initialState } from "./isSubmitting";

test("Change password reducer isSubmitting", () => {
    // CHANGE_PASSWORD
    const changePasswordAction = { type: CHANGE_PASSWORD, payload: null };
    expect(reducer(initialState, changePasswordAction)).toBe(true);

    // CHANGE_PASSWORD_OK
    const changePasswordOkAction = { type: CHANGE_PASSWORD_OK, payload: null };
    expect(reducer(initialState, changePasswordOkAction)).toBe(initialState);

    // CHANGE_PASSWORD_ERROR
    const changePasswordErrorAction = { type: CHANGE_PASSWORD_ERROR, payload: null };
    expect(reducer(initialState, changePasswordErrorAction)).toBe(initialState);

    // default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
