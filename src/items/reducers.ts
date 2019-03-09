import { combineReducers } from 'redux';

import list, { Type as ListType } from './list/reducers';

export interface Type {
    list: ListType
}

export default combineReducers({ list });
