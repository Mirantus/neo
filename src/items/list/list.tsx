import React from "react";

import ListItem from "./item";
import { ListDataStore } from "./reducers/data";

type Props = {
    data: ListDataStore;
};

const ItemsListContent = (props: Props) => {
    return (
        <div className="container">
            {props.data.map((item) => (
                <ListItem key={item.id} data={item} />
            ))}
            <hr />
        </div>
    );
};

export default ItemsListContent;
