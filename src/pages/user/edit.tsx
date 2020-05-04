import * as React from "react";
import { RouteComponentProps } from "react-router";

import { IRouterProps } from "../../types";
import UserEdit from "../../user/edit/index";

export interface IProps extends RouteComponentProps<IRouterProps> {}

const PageUserEdit = (props: IProps) => <UserEdit history={props.history} />;

export default PageUserEdit;
