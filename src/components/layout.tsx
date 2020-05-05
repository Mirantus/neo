import React from "react";

import UserPanel from "../user/panel/index";
import Menu from "./menu";

type Props = {
    children: any;
};

const Layout = (props: Props) => (
    <>
        <nav className="navbar is-link">
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Menu />
                </div>

                <div className="navbar-end">
                    <UserPanel />
                </div>
            </div>
        </nav>
        <section className="section">{props.children}</section>
    </>
);

export default Layout;
