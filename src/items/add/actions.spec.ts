import { ITEMS_ADD_INIT, ITEMS_ADD, ITEMS_ADD_OK, ITEMS_ADD_ERROR } from "./constants";
import { initAdd, add } from "./actions";
import * as api from "../../utils/api";

const fetchSuccess = (): any => Promise.resolve("test");
const fetchError = (): any => {
    throw "error";
};

test("Add actions", async () => {
    //ITEMS_ADD_INIT
    expect(initAdd()).toStrictEqual({ type: ITEMS_ADD_INIT });

    //ITEMS_ADD
    const values = { date: "", id: "", text: "" };
    const dispatch = jest.fn();
    const spy = jest.spyOn(api, "fetch").mockImplementation(fetchSuccess);
    const actionCreator = add(values);
    await actionCreator(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: ITEMS_ADD });

    //Fetch
    expect(spy).toHaveBeenCalledWith("items/", "POST", values);

    //ITEMS_ADD_OK
    expect(dispatch).toHaveBeenLastCalledWith({ type: ITEMS_ADD_OK });

    //ITEMS_ADD_ERROR
    spy.mockImplementation(fetchError);
    await actionCreator(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith({
        payload: "error",
        type: ITEMS_ADD_ERROR,
    });
});
