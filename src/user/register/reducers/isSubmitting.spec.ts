import { REGISTER, REGISTER_ERROR, REGISTER_OK } from "../constants";
import reducer, { initialState } from "./isSubmitting";

test("Register reducer isSubmitting", () => {
    // REGISTER
    const registerAction = { type: REGISTER, payload: null };
    expect(reducer(initialState, registerAction)).toBe(true);

    // REGISTER_OK
    const registerOkAction = { type: REGISTER_OK, payload: null };
    expect(reducer(initialState, registerOkAction)).toBe(initialState);

    // REGISTER_ERROR
    const registerErrorAction = { type: REGISTER_ERROR, payload: null };
    expect(reducer(initialState, registerErrorAction)).toBe(initialState);

    // default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
