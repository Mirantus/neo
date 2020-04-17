import { IMessage } from "../../types";
import { MESSAGE_HIDE, MESSAGE_SHOW } from "./constants";
import reducer, { initialState } from "./reducers";

test("Message reducer", () => {
    // MESSAGE_HIDE
    const hideAction = { type: MESSAGE_HIDE };
    expect(reducer(initialState, hideAction)).toBe(initialState);

    // MESSAGE_SHOW
    const message: IMessage = { type: initialState.type, text: "123" };
    const showAction = { type: MESSAGE_SHOW, payload: message };
    expect(reducer(initialState, showAction)).toBe(message);

    // default
    const otherAction = { type: "test2", payload: message };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
