import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";

import { IStore } from "../store/reducers";

interface IPrivateRouteProps extends RouteProps {
    component: FunctionComponent<any>;
    isAuthorized: boolean;
}

export const PrivateRoute: FunctionComponent<IPrivateRouteProps> = ({
    component: Component,
    isAuthorized,
    ...rest
}) => {
    const render = (props: any) =>
        isAuthorized ? (
            <Component {...props} />
        ) : (
            <Redirect
                to={{
                    pathname: "/login",
                    state: { from: props.location },
                }}
            />
        );

    return <Route {...rest} render={render} />;
};

const mapStateToProps = (state: IStore) => ({ isAuthorized: state.user.auth.isAuthorized });

export default connect(mapStateToProps)(PrivateRoute);
