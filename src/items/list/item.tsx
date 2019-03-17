import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import Date from '../item/date';
import { ItemType } from '../../types';

interface RouterPropsType {}
interface PropsType extends RouteComponentProps<RouterPropsType> {
    data: ItemType,
}

const Item = (props: PropsType) => {
    const { data, history } = props;

    const handleClick = () => history.push('/items/' + data.id);

    return (
        <div style={{ cursor: 'pointer' }} onClick={handleClick}>
            <hr />
            <Date date={data.date} />
            {data.text}<br />
        </div>
    );
};

export default withRouter(Item);
