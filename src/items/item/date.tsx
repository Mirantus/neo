import React from 'react';
import { format } from 'date-fns';

interface PropsType {
    date: string,
}

export default (props: PropsType) => (
    <div>
        <b>
            <small>
                {format(props.date, 'D.MM.YYYY')}
            </small>
        </b>
    </div>
);
