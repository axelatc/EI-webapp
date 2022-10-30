import {Validators} from "@angular/forms";

export const usernameMinLength = 1;
export const usernameMaxLength = 100;
export const passwordMinLength = 6;
export const passwordMaxLength = 255;
export const UsernameValidators = [Validators.required, Validators.maxLength(usernameMaxLength), Validators.minLength(usernameMinLength)];
export const PasswordValidators = [Validators.required, Validators.maxLength(passwordMaxLength), Validators.minLength(passwordMinLength), Validators.pattern(/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,255})$/)];
