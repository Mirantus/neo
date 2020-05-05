import React from "react";
import { Link } from "react-router-dom";

import { Item } from "../../types";
import DeleteButton from "../delete/button";
import EditButton from "../edit/button";
import Date from "../item/date";

type Props = {
    data: Item;
};

export const ListItem = (props: Props) => {
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

export default ListItem;
