import * as React from "react";
import { RouteComponentProps } from "react-router";

import { RouterProps } from "../../types";
import PasswordRecovery from "../../user/passwordRecovery/index";

type Props = RouteComponentProps<RouterProps>;

const PagePasswordRecovery = (props: Props) => <PasswordRecovery history={props.history} />;

export default PagePasswordRecovery;
