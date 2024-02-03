import React from "react";

import { ItemsListInitStore } from "../../store/items/list/init";

import ListItem from "./item";

type Props = {
    data: ItemsListInitStore["data"];
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
