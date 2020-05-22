import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { ErrorStore } from "../store/error";
import { IsLoadedStore } from "../store/isLoaded";

type Props = {
    error: ErrorStore;
    isSubmitted: IsLoadedStore;
    onRedirect(): void;
    url: string;
};

const useSubmitRedirect = (props: Props) => {
    const { error, isSubmitted, onRedirect, url } = props;
    const history = useHistory();

    useEffect(() => {
        if (!error && isSubmitted) {
            onRedirect();
            history.push(url);
        }
    }, [error, history, isSubmitted, onRedirect, url]);
};

export default useSubmitRedirect;
