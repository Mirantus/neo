import { IUser } from "../../types";

export interface IAuthResponse {
    token: string;
    user: IUser;
}
