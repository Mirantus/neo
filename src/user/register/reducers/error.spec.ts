import { REGISTER, REGISTER_ERROR } from "../constants";
import reducer, { initialState } from "./error";

test("Register reducer error", () => {
    //REGISTER
    const registerAction = { type: REGISTER, payload: null };
    expect(reducer(initialState, registerAction)).toBe(initialState);

    //REGISTER_ERROR
    const errorRegisterPayload = "test1";
    const errorRegisterAction = { type: REGISTER_ERROR, payload: errorRegisterPayload };
    expect(reducer(initialState, errorRegisterAction)).toEqual(errorRegisterPayload);

    //default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
