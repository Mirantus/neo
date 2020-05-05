import * as React from "react";
import { RouteComponentProps } from "react-router";

import { RouterProps } from "../../types";
import UserEdit from "../../user/edit/index";

type Props = RouteComponentProps<RouterProps>;

const PageUserEdit = (props: Props) => <UserEdit history={props.history} />;

export default PageUserEdit;
