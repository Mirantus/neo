import * as React from "react";
import { RouteComponentProps } from "react-router";

import Edit from "../../items/edit/index";
import { IRouterProps } from "../../types";

type IProps = RouteComponentProps<IRouterProps>;

const PageItemsEdit = (props: IProps) => <Edit history={props.history} id={props.match.params.id} />;

export default PageItemsEdit;
