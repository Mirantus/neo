import { format } from "date-fns";
import React from "react";

interface IProps {
    date: string;
}

export default (props: IProps) => (
    <div>
        <b>
            <small>{format(props.date, "D.MM.YYYY")}</small>
        </b>
    </div>
);
