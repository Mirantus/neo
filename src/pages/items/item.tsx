import * as React from "react";
import { RouteComponentProps } from "react-router";

import Item from "../../items/item";
import { RouterProps } from "../../types";

type Props = RouteComponentProps<RouterProps>;

const PageItemsItem = (props: Props) => <Item id={props.match.params.id} />;

export default PageItemsItem;
