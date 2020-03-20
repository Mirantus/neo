import { createBrowserHistory } from "history";
import * as React from "react";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router";

import Layout from "../components/layout";
import PrivateRoute from "../components/privateRoute";
import { configureStore } from "../store";
import "../styles.less";
import Loader from "./loader";

const Add = React.lazy(() => import(/* webpackChunkName: "add" */ "../pages/items/add"));
const Item = React.lazy(() => import(/* webpackChunkName: "item" */ "../pages/items/item"));

const Login = React.lazy(() => import(/* webpackChunkName: "item" */ "../pages/user/login"));
const Profile = React.lazy(() => import(/* webpackChunkName: "item" */ "../pages/user/profile"));
const Register = React.lazy(() => import(/* webpackChunkName: "item" */ "../pages/user/register"));

const Home = React.lazy(() => import(/* webpackChunkName: "home" */ "../pages/Home"));

// prepare store
const history = createBrowserHistory();
const store = configureStore();

const Application = () => (
    <Provider store={store}>
        <Router history={history}>
            <Layout>
                <React.Suspense fallback={<Loader />}>
                    <Switch>
                        <Route path="/add" component={Add} />
                        <Route path="/items/:id(\d+)" component={Item} />

                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <PrivateRoute path="/profile" component={Profile} />

                        <Route path="/" component={Home} />
                    </Switch>
                </React.Suspense>
            </Layout>
        </Router>
    </Provider>
);

export default Application;
