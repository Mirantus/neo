import * as React from "react";
import { RouteComponentProps } from "react-router";

import Register from "../../user/register/index";

interface IRouterProps {
    id: string;
}

export interface IProps extends RouteComponentProps<IRouterProps> {}

const PageRegister = (props: IProps) => <Register history={props.history} />;

export default PageRegister;
