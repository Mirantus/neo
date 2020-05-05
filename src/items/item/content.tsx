import React from "react";

import { Item } from "../../types";
import Date from "./date";

type Props = {
    data: Item;
};

const ItemContent = (props: Props) => {
    const { data } = props;

    return (
        <div className="container">
            <h1 className="title">Запись</h1>
            <p>{data.text}</p>
            <p>
                <Date date={data.date} />
            </p>
        </div>
    );
};

export default ItemContent;
