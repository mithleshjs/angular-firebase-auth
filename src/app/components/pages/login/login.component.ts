import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  isSigningIn = false;
  authError: any;

  constructor(private fb: FormBuilder, private auth: AuthService,  private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.signInForm = this.fb.group({
      'email': ['', [
          Validators.email
        ]],
      'password': ['', [
          Validators.required
        ]],
    });
  }

  signIn(): void {
    this.isSigningIn = true;
    this.authError = null;
    this.auth.emailSignIn(this.email, this.password)
    .catch(error => {
      this.isSigningIn = false;
      this.authError = error;
    });
  }

  get email() {
    return this.signInForm.get('email').value;
  }

  get password() {
    return this.signInForm.get('password').value;
  }
}
