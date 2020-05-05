import * as React from "react";
import { RouteComponentProps } from "react-router";

import { IRouterProps } from "../../types";
import Register from "../../user/register/index";

type IProps = RouteComponentProps<IRouterProps>;

const PageRegister = (props: IProps) => <Register history={props.history} />;

export default PageRegister;
