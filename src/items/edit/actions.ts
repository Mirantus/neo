import { Dispatch } from "redux";

import { createFetch } from "../../store/actions";
import { INIT } from "../../store/constants";
import { Action, ActionError, Item } from "../../types";
import { ITEMS_EDIT } from "./constants";

export type EditAction = Action | ActionError;

export const init = (id: string) => async (dispatch: Dispatch) => {
    await createFetch({ actionType: ITEMS_EDIT + INIT, url: "items/item?id=" + id })(dispatch);
};

export const edit = (values: Item) => async (dispatch: Dispatch) => {
    await createFetch({ actionType: ITEMS_EDIT, data: values, method: "POST", url: "items/edit" })(dispatch);
    dispatch({ type: ITEMS_EDIT });
};
