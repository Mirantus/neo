import * as React from "react";
import { RouteComponentProps } from "react-router";

import { IRouterProps } from "../../types";
import PasswordRecovery from "../../user/passwordRecovery/index";

export interface IProps extends RouteComponentProps<IRouterProps> {}

const PagePasswordRecovery = (props: IProps) => <PasswordRecovery history={props.history} />;

export default PagePasswordRecovery;
