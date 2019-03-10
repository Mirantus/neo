import React from 'react';
import { format } from 'date-fns';

import { Type as DataType } from './reducers/data';

interface PropsType {
    data: DataType,
}

const List = (props: PropsType) => {
    return (
        <div>
            {
                props.data.map(
                    item => (
                        <div key={item.id}>
                            <hr />
                            <b><small>{format(item.date, 'D.MM.YYYY')}</small></b><br />
                            {item.text}<br />
                        </div>
                    )
                )
            }
            <hr />
        </div>
    );
};

export default List;
