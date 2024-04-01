import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService
    ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  onSubmit(): void {
    const credentials = this.loginForm.value;
    console.log(credentials);
    this.authService.login(credentials.username, credentials.password)
     .subscribe(
        (response) => {
          // handle successful login
        },
        (error) => {
          // handle login error
        }
      );
  }
}
