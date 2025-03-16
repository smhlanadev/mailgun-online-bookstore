import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  AuthMode = AuthMode;
  authMode: AuthMode = AuthMode.Login;

  constructor(private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.authForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.authForm?.valid) {
      const { email, password } = this.authForm.value;
      
      if (email === 'user@g.com' && password === 'password') {
        this.router.navigate(['/main']);
      } else {
        alert('Invalid credentials');
      }
    }
  }

  switchAuthMode(event: Event) {
    event.preventDefault();
    this.authMode = this.authMode === AuthMode.Login ? AuthMode.Register : AuthMode.Login;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { mode: this.authMode.toLocaleLowerCase() },
      queryParamsHandling: 'merge'
    });
    this.updateValidators();
  }

  updateValidators() {
    this.authForm.clearValidators();
    this.authForm.get('name')?.clearValidators();
    this.authForm.reset();
  }
}

export enum AuthMode {
  Login = 'Login',
  Register = 'Register'
} 
