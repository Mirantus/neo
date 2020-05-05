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
import Loading from "./loading";
import Message from "./message";

const Add = React.lazy(() => import(/* webpackChunkName: "add" */ "../pages/items/add"));
const Edit = React.lazy(() => import(/* webpackChunkName: "item" */ "../pages/items/edit"));
const Item = React.lazy(() => import(/* webpackChunkName: "item" */ "../pages/items/item"));

const Login = React.lazy(() => import(/* webpackChunkName: "item" */ "../pages/user/login"));
const Profile = React.lazy(() => import(/* webpackChunkName: "item" */ "../pages/user/profile"));
const UserEdit = React.lazy(() => import(/* webpackChunkName: "item" */ "../pages/user/edit"));
const Register = React.lazy(() => import(/* webpackChunkName: "item" */ "../pages/user/register"));
const ChangePassword = React.lazy(() => import(/* webpackChunkName: "item" */ "../pages/user/changePassword"));
const PasswordRecovery = React.lazy(() => import(/* webpackChunkName: "item" */ "../pages/user/passwordRecovery"));

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
                        <PrivateRoute exact path="/add" component={Add} />
                        <PrivateRoute exact path="/edit/:id(\d+)" component={Edit} />
                        <Route exact path="/items/:id(\d+)" component={Item} />

                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/password_recovery" component={PasswordRecovery} />
                        <PrivateRoute exact path="/profile" component={Profile} />
                        <PrivateRoute exact path="/user/edit" component={UserEdit} />
                        <PrivateRoute exact path="/change_password" component={ChangePassword} />

                        <Route exact path="/" component={Home} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </React.Suspense>
            </Layout>
            <Auth />
            <Loading />
            <Message />
        </Router>
    </Provider>
);

export default Application;
