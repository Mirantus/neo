import * as React from "react";
import { RouteComponentProps } from "react-router";

import ChangePassword from "../../user/changePassword/index";

interface IRouterProps {
    id: string;
}

export interface IProps extends RouteComponentProps<IRouterProps> {}

const PageChangePassword = (props: IProps) => <ChangePassword history={props.history} />;

export default PageChangePassword;
