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
        <div className="box pointer" onClick={handleClick}>
            {data.text}
            <br />
            <Date date={data.date} />
        </div>
    );
};

export default withRouter(Item);
