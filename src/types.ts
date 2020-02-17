export interface IAction {
    type: string;
    payload: any;
}

export interface IActionError extends IAction {
    payload: string;
}

export interface IItem {
    date: string;
    id: string;
    text: string;
}

export interface IUser {
    email: string;
    password?: string;
    password2?: string;
}
