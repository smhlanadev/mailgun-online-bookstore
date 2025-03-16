import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AuthMode } from '../../models/auth-mode';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  standalone: true
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  AuthMode = AuthMode;
  authMode: AuthMode = AuthMode.Login;

  constructor(private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute, private userService: UserService, private snackBar: MatSnackBar) {
    this.authForm = this.formBuilder.group({
      name: [''],
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
    const user: User = { name, email };

    if (this.authMode === AuthMode.Login) {
      this.login(email, password);
    } else {
      this.register(user, password);
    }
  }

  switchAuthMode(event?: Event) {
    event?.preventDefault();
    this.authMode = this.authMode === AuthMode.Login ? AuthMode.Register : AuthMode.Login;
    this.updateValidators();

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { mode: this.authMode.toLocaleLowerCase() },
      queryParamsHandling: 'merge'
    });
  }

  updateValidators() {
    this.authForm.reset();
    if (this.authMode === AuthMode.Login) this.authForm.get('name')?.clearValidators();
    else this.authForm.get('name')?.setValidators(Validators.required);
    this.authForm.get('name')?.updateValueAndValidity();
  }

  login(email: string, password: string) {
    if (this.userService.login(email, password)) this.router.navigate(['/store']);
    else alert('Invalid credentials');
  }

  register(user: User, password: string) {
    this.userService.register(user, password);
    this.snackBar.open('You have been registered successfully', 'Close', { duration: 3000 });
    setTimeout(() => {
      this.switchAuthMode();
    }, 3000);
  }
}

