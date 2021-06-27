import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private userService: UserService ) {
    this.form = this.fb.group({
      cpf: ['', [Validators.required]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): any {
    if (this.form.valid) {
      this.userService
      .register(this.form.value)
      .then((res: any) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
      });


    }
  }
}
