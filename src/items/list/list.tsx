import React from "react";

import ListItem from "./item";
import { ListStore } from "./slice";

type Props = {
    data: ListStore["data"];
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
