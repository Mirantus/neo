import React from "react";
import { connect } from "react-redux";

import { Store } from "../../store/index";
import { User } from "../../types";

import Content from "./content";

type Props = {
    profile: User;
};

export const Profile = (props: Props) => {
    return <Content profile={props.profile} />;
};

const mapStateToProps = ({ user }: Store) => ({ profile: user.profile });

export default connect(mapStateToProps)(Profile);
