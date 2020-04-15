import React from "react";
import { Link } from "react-router-dom";

import { IItem } from "../../../types";
import DeleteButton from "../../delete/button";
import Date from "../../item/date";
import EditButton from "./editButton";

interface IProps {
    data: IItem;
}

export const Item = (props: IProps) => {
    const { data } = props;

    return (
        <div className="box">
            <Link to={`/items/${data.id}`} className="is-link">
                {data.text}
            </Link>
            <br />
            <small>
                <Date date={data.date} />
            </small>
            <div className="item-tools">
                <EditButton item={data} />
                <DeleteButton item={data} />
            </div>
        </div>
    );
};

export default Item;
