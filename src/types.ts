export interface IError {
    message: string;
}

export interface IAction {
    type: string;
    payload: any;
}

export interface IActionError extends IAction {
    payload: {
        message: string;
    };
}

export interface IItem {
    date: string;
    id: string;
    text: string;
}
