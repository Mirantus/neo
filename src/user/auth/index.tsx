import React from "react";
import { connect } from "react-redux";

import { auth } from "./actions";

interface IProps {
    auth(): void;
}

const Auth = (props: IProps) => {
    React.useEffect(() => {
        props.auth();
    }, []);

    return null;
};

export default connect(null, { auth })(Auth);
