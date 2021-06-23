import { HttpClient } from '@angular/common/http';
import { MaterialModuleModule } from './material-module/material-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModuleModule,
    CommonModule
  ]
})
export class SharedModule { }
