import * as React from "react";
import { RouteComponentProps } from "react-router";

import { RouterProps } from "../../types";
import ChangePassword from "../../user/changePassword/index";

type Props = RouteComponentProps<RouterProps>;

const PageChangePassword = (props: Props) => <ChangePassword history={props.history} />;

export default PageChangePassword;
