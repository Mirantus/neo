import { combineReducers } from 'redux';

import item, { Type as ItemType } from './item/reducers';
import list, { Type as ListType } from './list/reducers';

export interface Type {
    item: ItemType,
    list: ListType,
}

export default combineReducers({ item, list });
