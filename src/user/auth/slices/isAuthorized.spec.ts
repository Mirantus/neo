import { login } from "../../login/slices/submit";
import { auth, logoutAction } from "../actions";
import reducer, { initialState } from "../slices/isAuthorized";

test("User auth reducer isAuthorized", () => {
    // LOGIN_OK
    const userLoginOkAction = { type: login.fulfilled, payload: { email: "e@mail.com" } };
    expect(reducer(initialState, userLoginOkAction)).toBe(true);

    // LOGOUT
    expect(reducer(initialState, logoutAction())).toBe(initialState);

    //TODO
    // REGISTER_OK
    // const userRegisterOkAction = { type: REGISTER + OK, payload: { email: "e@mail.com" } };
    // expect(reducer(initialState, userRegisterOkAction)).toBe(true);

    // AUTH
    const authAction = { type: auth.pending.type, payload: null };
    expect(reducer(initialState, authAction)).toBe(initialState);

    // AUTH_OK
    const authOkAction = { type: auth.fulfilled.type, payload: null };
    expect(reducer(initialState, authOkAction)).toBe(true);

    // AUTH_ERROR
    const authErrorAction = { type: auth.rejected.type, payload: null };
    expect(reducer(initialState, authErrorAction)).toBe(false);

    // default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
