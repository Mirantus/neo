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
    user_id: string;
}

export interface IMessage {
    text: string;
    type: "info" | "success" | "warning" | "danger";
}

export interface IUser {
    id?: string;
    email: string;
    password?: string;
    password2?: string;
}
