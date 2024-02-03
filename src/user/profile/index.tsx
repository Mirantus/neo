import { observer } from "mobx-react-lite";
import React from "react";

import store from "../../store";
import { User } from "../../types";

import Content from "./content";

type Props = {
    profile: User;
};

export const Profile = (props: Props) => {
    return <Content profile={props.profile} />;
};

export default observer(() => <Profile profile={store.user.profile} />);
