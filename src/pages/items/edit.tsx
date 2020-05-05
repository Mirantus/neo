import * as React from "react";
import { RouteComponentProps } from "react-router";

import Edit from "../../items/edit/index";
import { RouterProps } from "../../types";

type Props = RouteComponentProps<RouterProps>;

const PageItemsEdit = (props: Props) => <Edit history={props.history} id={props.match.params.id} />;

export default PageItemsEdit;
