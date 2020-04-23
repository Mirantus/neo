import { IUserEditAction } from "../actions";
import { USER_EDIT, USER_EDIT_ERROR, USER_EDIT_OK } from "../constants";

export type IUserEditIsSubmittingStore = boolean;

export const initialState = false;

export default (
    state: IUserEditIsSubmittingStore = initialState,
    action: IUserEditAction
): IUserEditIsSubmittingStore => {
    switch (action.type) {
        case USER_EDIT:
            return true;
        case USER_EDIT_OK:
        case USER_EDIT_ERROR:
            return initialState;
        default:
            return state;
    }
};
