import * as React from "react";
import { connect } from "react-redux";

import { IStore } from "../../store/reducers";
import Content from "./content";

export const Profile = () => {
    return <Content />;
};

const mapStateToProps = (store: IStore) => ({});

export default connect(mapStateToProps)(Profile);
