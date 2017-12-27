# Angular + Firebase Authentication Boilerplate

A basic Angular (v5.1) web app with a fully working authentication system powered by Firebase. You can use this project to learn how to properly integrate Firebase authentication in Angular or you can use it as a base for your future projects to save time.

## Features

- Login and Signup Pages
- Proper Form Validations
- Proper Firebase Auth Errors Handling
- Custom Validator for Password Confirmation

## Usage

Create an account at https://firebase.google.com/

- `git clone https://github.com/mithleshjs/angular-firebase-auth.git angular-firebase-auth`
- `cd angular-firebase-auth`
- `npm install`

Enable Email/Password sign-in:

- In the Firebase [console](https://console.firebase.google.com/), open the Auth section.
- On the Sign in method tab, enable the Email/password sign-in method and click Save.

Open `/src/environments/environment.ts` and add your Firebase configuration:

```ts
export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
```
And finally `ng serve`

## Third Party Libraries
There are several third-party libraries used inside this project to make things simpler, of which you can read further to understand about their implementation:

- [UltimateAngular/ngx-errors
](https://github.com/UltimateAngular/ngx-errors) -  makes validation easier
- [valor-software/ngx-bootstrap
](https://github.com/valor-software/ngx-bootstrap) - bootstrap for Angular
- [MurhafSousli/ngx-progressbar
](https://github.com/MurhafSousli/ngx-progressbar) - to show loading bar at the top
