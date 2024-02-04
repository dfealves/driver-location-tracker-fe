import { Component } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
import { FormLoginInterface } from "src/app/shared/interface/login-form.interface";
import { AuthService } from "src/app/shared/service/auth.service";

@Component({
    selector: 'app-login-container',
    standalone: false,
    template: `<app-login
    [form]=form
    ($login)="login($event)"></app-login>`
})

export class LoginContainerComponent {
    public form: UntypedFormGroup;
    constructor(
        private fb: UntypedFormBuilder,
        private authService: AuthService
    ) {
        this.form = this.fb.group(new FormLoginInterface());
    }

    public login($event: { username: string, password: string }): void {
        console.log('payload', $event)
        this.authService.login($event.username, $event.password).subscribe({
            next: (r) => {
                console.log(r)

                console.log('decoded', this.authService.getDecodedToken())
            },
            error: (err) => {
                console.error(err)
            }
        })
    }
}