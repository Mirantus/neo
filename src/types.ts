export interface Action {
    type: string;
    payload: any;
}

export interface ActionError extends Action {
    payload: string;
}

export interface Item {
    date: string;
    id: string;
    text: string;
    user_id: string;
}

export interface Message {
    text: string;
    type: "info" | "success" | "warning" | "danger";
}

export interface RouterProps {
    id: string;
}

export interface User {
    id: string;
    email: string;
}

export type ErrorStore = string | null;

export type IsLoadedStore = boolean;

export type IsLoadingStore = boolean;

export interface SubmitState {
    error: ErrorStore;
    settled: IsLoadedStore;
    pending: IsLoadingStore;
}
