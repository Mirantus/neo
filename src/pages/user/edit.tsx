import * as React from "react";
import { RouteComponentProps } from "react-router";

import UserEdit from "../../user/edit/index";

interface IRouterProps {
    id: string;
}

export interface IProps extends RouteComponentProps<IRouterProps> {}

const PageUserEdit = (props: IProps) => <UserEdit history={props.history} />;

export default PageUserEdit;
