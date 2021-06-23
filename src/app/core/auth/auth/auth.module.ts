import { AuthGuardService } from './../../guard/auth-guard.service';
import { InterceptorService } from './../interceptor.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';



@NgModule({
  providers: [
    AuthGuardService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  imports: [CommonModule, RouterModule, HttpClientModule]
})
export class AuthModule { }
