import { format } from "date-fns";
import React from "react";

interface IProps {
    date: string;
}

const ItemDate = (props: IProps) => (
    <time dateTime={format(props.date, "YYYY-MM-DD")}>{format(props.date, "D.MM.YYYY")}</time>
);

export default ItemDate;
