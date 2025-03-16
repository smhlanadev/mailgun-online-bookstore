import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

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

  constructor(private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute, private userService: UserService) {
    this.authForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.updateValidators();
  }

  onSubmit() {
    if (!this.authForm?.valid) return;

    const { name, email, password } = this.authForm.value;

    if (this.userService.login(email, password)) {
      this.router.navigate(['/store']);
    } else {
      alert('Invalid credentials');
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
    this.authForm.reset();
    if (this.authMode === AuthMode.Login) this.authForm.get('name')?.clearValidators();
  }
}

export enum AuthMode {
  Login = 'Login',
  Register = 'Register'
} 
