import React from "react";
import { RouteComponentProps, withRouter } from "react-router";

import { IItem } from "../../types";
import Date from "../item/date";

interface IProps extends RouteComponentProps<{}> {
    data: IItem;
}

const Item = (props: IProps) => {
    const { data, history } = props;

    const handleClick = () => history.push("/items/" + data.id);

    return (
        <div style={{ cursor: "pointer" }} onClick={handleClick}>
            <hr />
            <Date date={data.date} />
            {data.text}
            <br />
        </div>
    );
};

export default withRouter(Item);
