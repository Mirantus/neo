import { observer } from "mobx-react-lite";
import React from "react";

import store from "../../store";
import { User } from "../../types";

type Props = {
    auth(profile: User): void;
    profile: User;
};

const Auth = (props: Props) => {
    const { auth, profile } = props;

    React.useEffect(() => {
        auth(profile);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return null;
};

export default observer(() => <Auth auth={store.user.auth.auth} profile={store.user.profile} />);
