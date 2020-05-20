import { Dispatch } from "redux";

import { createFetch } from "../../store/actions";
import { Action, ActionError, Item } from "../../types";
import { ITEMS_FETCH } from "./constants";

interface ActionOk extends Action {
    payload: Item[];
}

export type ListAction = Action | ActionError | ActionOk;

export const fetchItems = () => async (dispatch: Dispatch) => {
    await createFetch({ actionType: ITEMS_FETCH, url: "items/" })(dispatch);
};
