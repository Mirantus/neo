import React from "react";

import { IItem } from "../../types";
import Date from "./date";

interface IProps {
    data: IItem;
}

const ItemContent = (props: IProps) => {
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
