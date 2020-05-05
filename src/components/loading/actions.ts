import { LOADING_HIDE, LOADING_SHOW } from "./constants";

export interface ActionLoading {
    type: string;
}

export const loadingHide = () => ({
    type: LOADING_HIDE,
});

export const loadingShow = () => ({
    type: LOADING_SHOW,
});
