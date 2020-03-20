import * as React from "react";
import { RouteComponentProps } from "react-router";

import Add from "../../items/add/index";

interface IRouterProps {
    id: string;
}

export interface IProps extends RouteComponentProps<IRouterProps> {}

const PageItemsAdd = (props: IProps) => (
    <div className="container">
        <h1 className="title">Добавление записи</h1>
        <Add history={props.history} />
    </div>
);

export default PageItemsAdd;
