import React from "react";

import { IItem } from "../../types";
import Date from "./date";

interface IProps {
    data: IItem;
}

export default (props: IProps) => {
    const { data } = props;

    return (
        <div>
            <Date date={data.date} />
            {data.text}
        </div>
    );
};
