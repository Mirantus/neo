import { CHANGE_PASSWORD, CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_INIT, CHANGE_PASSWORD_OK } from "../constants";
import reducer, { initialState } from "./isSubmitted";

test("Change password reducer isSubmitted", () => {
    // CHANGE_PASSWORD_INIT
    const changePasswordInitAction = { type: CHANGE_PASSWORD_INIT, payload: null };
    expect(reducer(initialState, changePasswordInitAction)).toBe(initialState);

    // CHANGE_PASSWORD
    const changePasswordAction = { type: CHANGE_PASSWORD, payload: null };
    expect(reducer(initialState, changePasswordAction)).toBe(initialState);

    // CHANGE_PASSWORD_OK
    const changePasswordOkAction = { type: CHANGE_PASSWORD_OK, payload: null };
    expect(reducer(initialState, changePasswordOkAction)).toBe(true);

    // CHANGE_PASSWORD_ERROR
    const changePasswordErrorAction = { type: CHANGE_PASSWORD_ERROR, payload: null };
    expect(reducer(initialState, changePasswordErrorAction)).toBe(true);

    // default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
