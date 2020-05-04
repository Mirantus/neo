import * as React from "react";
import { RouteComponentProps } from "react-router";

import { IRouterProps } from "../../types";
import Register from "../../user/register/index";

export interface IProps extends RouteComponentProps<IRouterProps> {}

const PageRegister = (props: IProps) => <Register history={props.history} />;

export default PageRegister;
