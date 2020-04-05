import * as React from "react";
import { RouteComponentProps } from "react-router";

import Edit from "../../items/edit/index";

interface IRouterProps {
    id: string;
}

interface IProps extends RouteComponentProps<IRouterProps> {}

const PageItemsEdit = (props: IProps) => <Edit history={props.history} id={props.match.params.id} />;

export default PageItemsEdit;
