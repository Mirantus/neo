export interface ChangePasswordFormData {
    current_password: string;
    password: string;
    password2: string;
}

export interface ChangePasswordValidationErrors {
    password2?: string;
}
