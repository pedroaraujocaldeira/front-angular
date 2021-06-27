import { MaterialModuleModule } from './material-module/material-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { FlexLayoutModule } from "@angular/flex-layout";



@NgModule({
  declarations: [],
  imports: [
    NgxMaskModule.forRoot(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModuleModule,
    CommonModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
