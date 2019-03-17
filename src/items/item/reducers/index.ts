import { combineReducers } from 'redux';

import data, { Type as DataType } from './data';
import error, { Type as ErrorType } from './error';
import isFetching, { Type as IsFetchingType } from './isFetching';

export interface Type {
    data: DataType,
    error: ErrorType,
    isFetching: IsFetchingType
}

export default combineReducers({
    data,
    error,
    isFetching,
});
