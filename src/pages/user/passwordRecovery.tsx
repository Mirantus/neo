import * as React from "react";
import { RouteComponentProps } from "react-router";

import { IRouterProps } from "../../types";
import PasswordRecovery from "../../user/passwordRecovery/index";

type IProps = RouteComponentProps<IRouterProps>;

const PagePasswordRecovery = (props: IProps) => <PasswordRecovery history={props.history} />;

export default PagePasswordRecovery;
