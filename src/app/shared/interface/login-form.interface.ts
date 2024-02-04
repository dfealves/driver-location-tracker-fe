import { ValidatorFn, Validators } from "@angular/forms";

export class FormLoginInterface {
    username: (string | ValidatorFn[])[] = ['', [Validators.required, Validators.minLength(6)]];
    password: (string | ValidatorFn[])[] = ['', [Validators.required, Validators.minLength(8)]]
}