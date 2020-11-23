import reducer, { initialState, loadingHide, loadingShow } from "./slice";

test("Loading slice", () => {
    // LOADING_HIDE
    const hideAction = { type: loadingHide.type };
    expect(reducer(initialState, hideAction)).toBe(false);

    // LOADING_SHOW
    const showAction = { type: loadingShow.type };
    expect(reducer(initialState, showAction)).toBe(true);

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
