import { ITEMS_FETCH, ITEMS_FETCH_ERROR, ITEMS_FETCH_OK } from "./constants";
import { fetchItems } from "./actions";
import * as api from "../../utils/api";

const fetchSuccess = (): any => Promise.resolve("test");
const fetchError = (): any => {
    throw "error";
};

test("List actions", async () => {
    //ITEMS_FETCH
    const dispatch = jest.fn();
    const spy = jest.spyOn(api, "fetch").mockImplementation(fetchSuccess);
    const actionCreator = fetchItems();
    await actionCreator(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: ITEMS_FETCH });

    //Fetch
    expect(spy).toHaveBeenCalledWith("items/");

    //ITEMS_FETCH_OK
    expect(dispatch).toHaveBeenLastCalledWith({ payload: "test", type: ITEMS_FETCH_OK });

    //ITEMS_FETCH_ERROR
    spy.mockImplementation(fetchError);
    await actionCreator(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith({
        payload: "error",
        type: ITEMS_FETCH_ERROR,
    });
});
