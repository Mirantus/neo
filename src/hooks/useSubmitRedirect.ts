import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { ErrorStore, IsLoadedStore } from "../types";

type Props = {
    error: ErrorStore;
    settled: IsLoadedStore;
    onRedirect(): void;
    url: string;
};

const useSubmitRedirect = (props: Props) => {
    const { error, settled, onRedirect, url } = props;
    const history = useHistory();

    useEffect(() => {
        if (!error && settled) {
            onRedirect();
            history.push(url);
        }
    }, [error, history, settled, onRedirect, url]);
};

export default useSubmitRedirect;
