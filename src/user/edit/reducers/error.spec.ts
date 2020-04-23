import { USER_EDIT, USER_EDIT_ERROR } from "../constants";
import reducer, { initialState } from "./error";

test("User edit reducer error", () => {
    // USER_EDIT
    const userEditAction = { type: USER_EDIT, payload: null };
    expect(reducer(initialState, userEditAction)).toBe(initialState);

    // USER_EDIT_ERROR
    const errorUserEditPayload = "test1";
    const errorUserEditAction = { type: USER_EDIT_ERROR, payload: errorUserEditPayload };
    expect(reducer(initialState, errorUserEditAction)).toEqual(errorUserEditPayload);

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
