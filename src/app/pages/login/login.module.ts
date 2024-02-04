import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {  LoginRoutingModule } from "./login.routing";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { LoginComponent } from "./login.component";
import { LoginContainerComponent } from "./login.container";

@NgModule({
    declarations: [
        LoginContainerComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        LoginComponent
    ],
    providers: [
        {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
      ]
})

export class LoginModule { }