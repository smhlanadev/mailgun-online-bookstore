import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onLogin() {
    if (this.loginForm?.valid) {
      const { email, password } = this.loginForm.value;
      
      if (email === 'user@g.com' && password === 'password') {
        this.router.navigate(['/main']);
      } else {
        alert('Invalid credentials');
      }
    }
  }
}
