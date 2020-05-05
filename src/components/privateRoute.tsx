import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";

import Loader from "../components/loader";
import { Store } from "../store/reducers";

interface PrivateRouteProps extends RouteProps {
    component: FunctionComponent<any>;
    isAuthorized: boolean;
    isFetching: boolean;
}

export const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({
    component: Component,
    isAuthorized,
    isFetching,
    ...rest
}: PrivateRouteProps) => {
    const render = (props: any) => {
        if (isFetching) {
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
    isFetching: state.user.auth.isFetching,
});

export default connect(mapStateToProps)(PrivateRoute);
