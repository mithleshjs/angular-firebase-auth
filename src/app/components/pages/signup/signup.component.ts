import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { confirmValidator } from '../../../validators/confirm.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  isSigningUp = false;
  signUpError = null;

  validationErrors = {
    displayName: [
      { name: 'required', text: 'This field is required', rules: ['touched', 'dirty'] },
      { name: 'pattern', text: 'Please enter a valid name', rules: ['touched', 'dirty'] }
    ],
    email: [
      { name: 'email', text: 'Please enter a valid email id', rules: ['touched', 'dirty'] },
    ],
    password: [
      { name: 'required', text: 'This field is required', rules: ['touched', 'dirty'] },
      { name: 'minlength', text: 'Min length is 6', rules: ['touched', 'dirty'] }
    ],
    passwordConfirm: [
      { name: 'confirm', text: 'Password does not match the confirm password', rules: ['touched', 'dirty'] },
    ],
  };

  constructor(private fb: FormBuilder, private auth: AuthService,  private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.signUpForm = this.fb.group({
      'displayName': ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
      ]],
      'email': ['', [
        Validators.email
      ]],
      'password': ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      'passwordConfirm': ['', [
        confirmValidator('password')
      ]],
    });
  }

  signUp(): void {
    this.isSigningUp = true;
    this.signUpError = null;
    this.auth.emailSignUp(this.email, this.password)
    .then(user => {
      this.auth.updateProfile(this.displayName, '');
    })
    .catch(error => {
      this.isSigningUp = false;
      this.signUpError = error;
    });
  }

  get email() {
    return this.signUpForm.get('email').value;
  }

  get password() {
    return this.signUpForm.get('password').value;
  }

  get displayName() {
    return this.signUpForm.get('displayName').value;
  }
}
