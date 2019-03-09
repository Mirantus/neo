import { combineReducers } from 'redux';

import items, { Type as ItemsType } from '../items/reducers';

export interface Type {
    items: ItemsType
}

export default combineReducers({
    items,
});
