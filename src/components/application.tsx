import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";

import Layout from "../components/layout";
import PrivateRoute from "../components/privateRoute";
import "../styles.css";
import Auth from "../user/auth/index";

import Loader from "./loader";
import Loading from "./loading";
import Message from "./message";

const Add = lazy(() => import(/* webpackChunkName: "add" */ "../pages/items/add"));
const Edit = lazy(() => import(/* webpackChunkName: "edit" */ "../pages/items/edit"));
const Item = lazy(() => import(/* webpackChunkName: "item" */ "../pages/items/item"));

const Login = lazy(() => import(/* webpackChunkName: "login" */ "../pages/user/login"));
const Profile = lazy(() => import(/* webpackChunkName: "profile" */ "../pages/user/profile"));
const UserEdit = lazy(() => import(/* webpackChunkName: "userEdit" */ "../pages/user/edit"));
const Register = lazy(() => import(/* webpackChunkName: "register" */ "../pages/user/register"));
const ChangePassword = lazy(() => import(/* webpackChunkName: "changePassword" */ "../pages/user/changePassword"));
const PasswordRecovery = lazy(() =>
    import(/* webpackChunkName: "passwordRecovery" */ "../pages/user/passwordRecovery")
);

const Home = lazy(() => import(/* webpackChunkName: "home" */ "../pages/home"));
const NotFound = lazy(() => import(/* webpackChunkName: "notFound" */ "../pages/notFound"));

const Application = () => (
    <>
        <Layout>
            <Suspense fallback={<Loader />}>
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
            </Suspense>
        </Layout>
        <Auth />
        <Loading />
        <Message />
    </>
);

export default Application;
