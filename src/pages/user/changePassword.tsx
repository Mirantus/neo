import * as React from "react";
import { RouteComponentProps } from "react-router";

import { IRouterProps } from "../../types";
import ChangePassword from "../../user/changePassword/index";

export interface IProps extends RouteComponentProps<IRouterProps> {}

const PageChangePassword = (props: IProps) => <ChangePassword history={props.history} />;

export default PageChangePassword;
