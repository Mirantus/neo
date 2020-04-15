import { LOADING_HIDE, LOADING_SHOW } from "./constants";
import reducer, { initialState } from "./reducers";

test("Loading reducer", () => {
    // LOADING_HIDE
    const hideAction = { type: LOADING_HIDE };
    expect(reducer(initialState, hideAction)).toBe(false);

    // LOADING_SHOW
    const showAction = { type: LOADING_SHOW };
    expect(reducer(initialState, showAction)).toBe(true);

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
