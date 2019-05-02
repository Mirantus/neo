import * as React from "react";
import { RouteComponentProps } from "react-router";

import Add from "../../items/add/index";

interface IRouterProps {
    id: string;
}

export interface IProps extends RouteComponentProps<IRouterProps> {}

export default (props: IProps) => (
    <>
        <h1>Добавление записи</h1>
        <Add history={props.history} />
    </>
);
