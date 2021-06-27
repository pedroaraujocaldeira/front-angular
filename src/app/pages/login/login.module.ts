import { SharedModule } from './../../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {NgxMaskModule} from 'ngx-mask';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true
      }) ,
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
