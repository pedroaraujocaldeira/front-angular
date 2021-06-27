import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService ) {
    this.form = this.fb.group({
      cpf: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  async ngOnInit(): Promise<void> {
    if (await this.authService.isLoggedIn()) {
      await this.router.navigate(['dashboard']);
    }
  }

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      this.authService
      .login(this.form.value)
      .toPromise()
      .then((res: boolean) => {
        if (res) {
            this.router.navigate(['dashboard']);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
      });


    }
  }
  ngOnDestroy(): void {
  }
}
