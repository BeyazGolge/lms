import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConfirmButtonComponent } from "./components/buttons/confirm-button/confirm-button.component";
import { PasswordInputComponent } from "./components/inputs/password-input/password-input.component";
import { EmailInputComponent } from "./components/inputs/email-input/email-input";
import { TextInputComponent } from "./components/inputs/text-input/text-input.component";

@NgModule({
    declarations:[
        ConfirmButtonComponent,
        EmailInputComponent,
        PasswordInputComponent,
        TextInputComponent
    ],
    imports: [
        CommonModule
    ],
    exports : [
        ConfirmButtonComponent,
        EmailInputComponent,
        PasswordInputComponent,
        TextInputComponent,
        CommonModule
    ]
})
export class SharedModule { }