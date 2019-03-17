import React from 'react';

import Date from './date';
import { ItemType } from '../../types';

interface PropsType {
    data: ItemType,
}

export default (props: PropsType) => {
    const { data } = props;

    return (
        <div>
            <Date date={data.date} />
            {data.text}
        </div>
    );
};
