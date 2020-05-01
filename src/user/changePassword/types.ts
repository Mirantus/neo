export interface IChangePassword {
    current_password: string;
    password: string;
    password2: string;
}

export interface IChangePasswordValidationErrors {
    password2?: string;
}
