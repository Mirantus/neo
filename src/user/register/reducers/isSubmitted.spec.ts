import { REGISTER_INIT, REGISTER, REGISTER_OK, REGISTER_ERROR } from "../constants";
import reducer, { initialState } from "./isSubmitted";

test("Register reducer isSubmitted", () => {
    //REGISTER_INIT
    const registerInitAction = { type: REGISTER_INIT, payload: null };
    expect(reducer(initialState, registerInitAction)).toBe(initialState);

    //REGISTER
    const registerAction = { type: REGISTER, payload: null };
    expect(reducer(initialState, registerAction)).toBe(initialState);

    //REGISTER_OK
    const registerOkAction = { type: REGISTER_OK, payload: null };
    expect(reducer(initialState, registerOkAction)).toBe(true);

    //REGISTER_ERROR
    const registerErrorAction = { type: REGISTER_ERROR, payload: null };
    expect(reducer(initialState, registerErrorAction)).toBe(true);

    //default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
