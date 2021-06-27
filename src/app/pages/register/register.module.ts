import { SharedModule } from './../../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true
      }) ,
    CommonModule,
    RegisterRoutingModule,
    SharedModule
  ]
})
export class RegisterModule { }
