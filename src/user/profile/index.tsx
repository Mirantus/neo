import * as React from "react";
import { connect } from "react-redux";

import { IStore } from "../../store/reducers";
import { IUser } from "../../types";
import Content from "./content";

type IProps = {
    profile: IUser;
};

export const Profile = (props: IProps) => {
    return <Content profile={props.profile} />;
};

const mapStateToProps = ({ user }: IStore) => ({ profile: user.profile });

export default connect(mapStateToProps)(Profile);
