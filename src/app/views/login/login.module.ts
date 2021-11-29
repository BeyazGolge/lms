import {NgModule } from "@angular/core";
import {BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "src/app/shared/shared.module";
import { LoginFormModule } from "./components/form/form.module";
import { LoginComponent } from "./login.component";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        BrowserModule,
        SharedModule,
        LoginFormModule
    ],
    exports: [LoginComponent],
    providers: [],
})

export class LoginModule {}