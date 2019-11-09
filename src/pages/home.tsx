import * as React from "react";

import List from "../items/list/";

const PageHome = () => (
    <section className="section">
        <div className="container">
            <h1 className="title">Записи</h1>
            <List />
        </div>
    </section>
);

export default PageHome;
