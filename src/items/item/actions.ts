import { Dispatch } from "redux";

import { createFetch } from "../../store/actions";
import { Action, ActionError, Item } from "../../types";
import { ITEM_FETCH } from "./constants";

interface ActionOk extends Action {
    payload: Item[];
}

export type ItemAction = Action | ActionError | ActionOk;

export const fetchItem = (id: string) => async (dispatch: Dispatch) => {
    await createFetch({ actionType: ITEM_FETCH, url: "items/item?id=" + id })(dispatch);
};
