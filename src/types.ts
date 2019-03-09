export interface ErrorType {
    message: string
}

export interface ActionType {
    type: string,
    payload: any
}

export interface ActionErrorType extends ActionType {
    payload: {
        message: string
    }
}

export interface ItemType {
    date: string;
    id: string;
    text: string;
}
