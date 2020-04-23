import { USER_EDIT, USER_EDIT_ERROR, USER_EDIT_INIT, USER_EDIT_OK } from "../constants";
import reducer, { initialState } from "./isSubmitted";

test("User edit reducer isSubmitted", () => {
    // USER_EDIT_INIT
    const userEditInitAction = { type: USER_EDIT_INIT, payload: null };
    expect(reducer(initialState, userEditInitAction)).toBe(initialState);

    // USER_EDIT
    const userEditAction = { type: USER_EDIT, payload: null };
    expect(reducer(initialState, userEditAction)).toBe(initialState);

    // USER_EDIT_OK
    const userEditOkAction = { type: USER_EDIT_OK, payload: null };
    expect(reducer(initialState, userEditOkAction)).toBe(true);

    // USER_EDIT_ERROR
    const userEditErrorAction = { type: USER_EDIT_ERROR, payload: null };
    expect(reducer(initialState, userEditErrorAction)).toBe(true);

    // default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
