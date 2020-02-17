import { ITEM_FETCH, ITEM_FETCH_ERROR, ITEM_FETCH_OK } from "./constants";
import { fetchItem } from "./actions";
import * as api from "../../utils/api";

const fetchSuccess = (): any => Promise.resolve("test");
const fetchError = (): any => {
    throw "error";
};

test("Item actions", async () => {
    //ITEM_FETCH
    const id = "id";
    const dispatch = jest.fn();
    const spy = jest.spyOn(api, "fetch").mockImplementation(fetchSuccess);
    const actionCreator = fetchItem(id);
    await actionCreator(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: ITEM_FETCH });

    //Fetch
    expect(spy).toHaveBeenCalledWith(`items/${id}`);

    //ITEM_FETCH_OK
    expect(dispatch).toHaveBeenLastCalledWith({ payload: "test", type: ITEM_FETCH_OK });

    //ITEM_FETCH_ERROR
    spy.mockImplementation(fetchError);
    await actionCreator(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith({
        payload: "error",
        type: ITEM_FETCH_ERROR,
    });
});
