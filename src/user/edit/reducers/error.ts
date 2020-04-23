import { IUserEditAction } from "../actions";
import { USER_EDIT, USER_EDIT_ERROR } from "../constants";

export type IUserEditErrorStore = string | null;

export const initialState = null;

export default (state: IUserEditErrorStore = initialState, action: IUserEditAction): IUserEditErrorStore => {
    switch (action.type) {
        case USER_EDIT:
            return initialState;

        case USER_EDIT_ERROR:
            return action.payload;

        default:
            return state;
    }
};
