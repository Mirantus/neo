import * as React from "react";
import { RouteComponentProps } from "react-router";

import { RouterProps } from "../../types";
import Register from "../../user/register/index";

type Props = RouteComponentProps<RouterProps>;

const PageRegister = (props: Props) => <Register history={props.history} />;

export default PageRegister;
