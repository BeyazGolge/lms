import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    RegisterComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
