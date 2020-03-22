import * as React from "react";
import { RouteComponentProps } from "react-router";

import Login from "../../user/login/index";

interface IRouterProps {
    id: string;
}

export interface IProps extends RouteComponentProps<IRouterProps> {}

const PageLogin = (props: IProps) => <Login history={props.history} />;

export default PageLogin;
