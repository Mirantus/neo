import { USER_AUTH, USER_AUTH_ERROR } from "../constants";
import reducer, { initialState } from "./error";

test("User auth reducer error", () => {
    //USER_AUTH
    const userAuthAction = { type: USER_AUTH, payload: null };
    expect(reducer(initialState, userAuthAction)).toBe(initialState);

    //USER_AUTH_ERROR
    const errorUserAuthPayload = { id: "test1" };
    const errorUserAuthAction = { type: USER_AUTH_ERROR, payload: errorUserAuthPayload };
    expect(reducer(initialState, errorUserAuthAction)).toEqual(errorUserAuthPayload);

    //default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
