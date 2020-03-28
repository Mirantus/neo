import { createBrowserHistory } from "history";
import * as React from "react";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router";

import Layout from "../components/layout";
import PrivateRoute from "../components/privateRoute";
import { configureStore } from "../store";
import "../styles.less";
import Auth from "../user/auth/index";
import Loader from "./loader";

const Add = React.lazy(() => import(/* webpackChunkName: "add" */ "../pages/items/add"));
const Item = React.lazy(() => import(/* webpackChunkName: "item" */ "../pages/items/item"));

const Login = React.lazy(() => import(/* webpackChunkName: "item" */ "../pages/user/login"));
const Profile = React.lazy(() => import(/* webpackChunkName: "item" */ "../pages/user/profile"));
const Register = React.lazy(() => import(/* webpackChunkName: "item" */ "../pages/user/register"));

const Home = React.lazy(() => import(/* webpackChunkName: "home" */ "../pages/home"));
const NotFound = React.lazy(() => import(/* webpackChunkName: "notFound" */ "../pages/notFound"));

// prepare store
const history = createBrowserHistory();
const store = configureStore();

const Application = () => (
    <Provider store={store}>
        <Router history={history}>
            <Layout>
                <React.Suspense fallback={<Loader />}>
                    <Switch>
                        <Route exact={true} path="/add" component={Add} />
                        <Route exact={true} path="/items/:id(\d+)" component={Item} />

                        <Route exact={true} path="/login" component={Login} />
                        <Route exact={true} path="/register" component={Register} />
                        <PrivateRoute exact={true} path="/profile" component={Profile} />

                        <Route exact={true} path="/" component={Home} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </React.Suspense>
            </Layout>
            <Auth />
        </Router>
    </Provider>
);

export default Application;
