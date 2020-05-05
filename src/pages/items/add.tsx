import * as React from "react";
import { RouteComponentProps } from "react-router";

import Add from "../../items/add/index";
import { RouterProps } from "../../types";

type Props = RouteComponentProps<RouterProps>;

const PageItemsAdd = (props: Props) => (
    <div className="container">
        <h1 className="title">Добавление записи</h1>
        <Add history={props.history} />
    </div>
);

export default PageItemsAdd;
