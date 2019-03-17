import React from 'react';

import { Type as DataType } from './reducers/data';
import Item from './item';

interface PropsType {
    data: DataType,
}

const List = (props: PropsType) => {
    return (
        <div>
            { props.data.map(item => <Item key={item.id} data={item} />) }
            <hr />
        </div>
    );
};

export default List;
