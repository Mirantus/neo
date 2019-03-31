import React from "react";

import Item from "./item";
import { IListDataStore } from "./reducers/data";

interface IProps {
    data: IListDataStore;
}

const List = (props: IProps) => {
    return (
        <div>
            {props.data.map(item => (
                <Item key={item.id} data={item} />
            ))}
            <hr />
        </div>
    );
};

export default List;
