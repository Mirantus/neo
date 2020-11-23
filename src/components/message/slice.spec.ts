import reducer, { initialState, messageHide, messageShow } from "./slice";

test("Message slice", () => {
    // MESSAGE_HIDE
    const hideAction = { type: messageHide.type };
    expect(reducer(initialState, hideAction)).toBe(initialState);

    // MESSAGE_SHOW
    const message = { type: initialState.type, text: "123" };
    const showAction = { type: messageShow.type, payload: message };
    expect(reducer(initialState, showAction)).toBe(message);

    // default
    const otherAction = { type: "test2", payload: message };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
