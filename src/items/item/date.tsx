import { format, parseISO } from "date-fns";
import React from "react";

interface IProps {
    date: string;
}

const ItemDate = (props: IProps) => {
    const date = parseISO(props.date);

    return <time dateTime={props.date}>{format(date, "d.MM.yyyy")}</time>;
};

export default ItemDate;
