export interface UserRegisterFormData {
    email: string;
    password: string;
    password2: string;
}

export interface UserRegisterValidationErrors {
    email?: string;
    password?: string;
    password2?: string;
}
