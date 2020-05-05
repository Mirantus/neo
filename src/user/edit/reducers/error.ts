import { UserEditAction } from "../actions";
import { USER_EDIT, USER_EDIT_ERROR } from "../constants";

export type UserEditErrorStore = string | null;

export const initialState = null;

export default (state: UserEditErrorStore = initialState, action: UserEditAction): UserEditErrorStore => {
    switch (action.type) {
        case USER_EDIT:
            return initialState;

        case USER_EDIT_ERROR:
            return action.payload;

        default:
            return state;
    }
};
