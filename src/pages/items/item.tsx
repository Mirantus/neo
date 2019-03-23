import * as React from "react";
import { RouteComponentProps } from "react-router";

import Item from "../../items/item/";

interface IRouterProps { id: string; }
interface IProps extends RouteComponentProps<IRouterProps> {}

export default (props: IProps) => <Item id={props.match.params.id} />;
