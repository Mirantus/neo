export interface IUserRegister {
    email: string;
    password: string;
    password2: string;
}

export interface IUserRegisterValidationErrors {
    email?: string;
    password?: string;
    password2?: string;
}
