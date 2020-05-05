import React from "react";
import { connect } from "react-redux";

import { auth } from "./actions";

type Props = {
    auth(): void;
};

const Auth = (props: Props) => {
    const { auth } = props;

    React.useEffect(() => {
        auth();
    }, [auth]);

    return null;
};

export default connect(null, { auth })(Auth);
