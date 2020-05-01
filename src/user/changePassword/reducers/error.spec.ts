import { CHANGE_PASSWORD, CHANGE_PASSWORD_ERROR } from "../constants";
import reducer, { initialState } from "./error";

test("Change password reducer error", () => {
    // CHANGE_PASSWORD
    const changePasswordAction = { type: CHANGE_PASSWORD, payload: null };
    expect(reducer(initialState, changePasswordAction)).toBe(initialState);

    // CHANGE_PASSWORD_ERROR
    const errorUserEditPayload = "test1";
    const errorUserEditAction = { type: CHANGE_PASSWORD_ERROR, payload: errorUserEditPayload };
    expect(reducer(initialState, errorUserEditAction)).toEqual(errorUserEditPayload);

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
