import { format, parseISO } from "date-fns";
import React from "react";

type Props = {
    date: string;
};

const ItemDate = (props: Props) => {
    const date = parseISO(props.date);

    return <time dateTime={props.date}>{format(date, "d.MM.yyyy")}</time>;
};

export default ItemDate;
