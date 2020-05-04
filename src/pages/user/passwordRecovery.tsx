import * as React from "react";
import { RouteComponentProps } from "react-router";

import PasswordRecovery from "../../user/passwordRecovery/index";

interface IRouterProps {
    id: string;
}

export interface IProps extends RouteComponentProps<IRouterProps> {}

const PagePasswordRecovery = (props: IProps) => <PasswordRecovery history={props.history} />;

export default PagePasswordRecovery;
