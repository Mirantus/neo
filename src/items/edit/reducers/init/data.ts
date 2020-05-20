import { INIT, OK } from "../../../../store/constants";
import { Item } from "../../../../types";
import { EditAction } from "../../actions";
import { ITEMS_EDIT } from "../../constants";

export type EditInitDataStore = Item | null;

export const initialState: EditInitDataStore = null;

export default (state: EditInitDataStore = initialState, action: EditAction): EditInitDataStore => {
    switch (action.type) {
        case ITEMS_EDIT + INIT:
            return initialState;

        case ITEMS_EDIT + INIT + OK:
            return action.payload;

        default:
            return state;
    }
};
