import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";

import Loader from "../components/loader";
import { Store } from "../store/index";

interface PrivateRouteProps extends RouteProps {
    component: FunctionComponent<any>;
    isAuthorized: boolean;
    pending: boolean;
}

export const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({
    component: Component,
    isAuthorized,
    pending,
    ...rest
}: PrivateRouteProps) => {
    const render = (props: any) => {
        if (pending) {
            return <Loader />;
        }

        if (isAuthorized) {
            return <Component {...props} />;
        }

        return (
            <Redirect
                to={{
                    pathname: "/login",
                    state: { from: props.location },
                }}
            />
        );
    };

    return <Route {...rest} render={render} />;
};

const mapStateToProps = (state: Store) => ({
    isAuthorized: state.user.auth.isAuthorized,
    pending: state.user.auth.submit.pending,
});

export default connect(mapStateToProps)(PrivateRoute);
