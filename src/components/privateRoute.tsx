import { observer } from "mobx-react-lite";
import React, { FunctionComponent } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

import Loader from "../components/loader";
import store from "../store";

interface PrivateRouteProps extends RouteProps {
    component: FunctionComponent<any>;
    isAuthorized?: boolean;
    pending?: boolean;
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

export default observer((props: PrivateRouteProps) => (
    <PrivateRoute {...props} isAuthorized={store.user.auth.isAuthorized} pending={store.user.auth.submit.pending} />
));
