import * as React from "react";

import AddButton from "../items/add/button";
import List from "../items/list/index";

const PageHome = () => (
    <div className="container">
        <h1 className="title">Записи</h1>
        <AddButton />
        <List />
    </div>
);

export default PageHome;
