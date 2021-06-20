import React from "react";

import ListItem from "./item";
import { ListInitStore } from "./slices/init";

type Props = {
    data: ListInitStore["data"];
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
