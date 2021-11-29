import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './core/routing.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './views/login/login.module';
import { RegisterModule } from './views/register/register.module';
import { StudentInfoComponent } from './views/student-info/student-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
