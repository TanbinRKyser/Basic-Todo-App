import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  // router.
  // dependency injection.
  // Adding router object in constructor is dependency injection.
  // Angular will import Router and enable it to use in this class. 
  constructor(
    private router: Router,
    private hardcodedAuthentication: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    //console.log(this.username)
    //console.log(this.password)

    /* Type 2: verification of user credentials */
    //if (this.username === 'root' && this.password === '1234'){
    if (this.hardcodedAuthentication.authenticate(this.username, this.password)) {
      this.invalidLogin = false
      // Redirect to welcome page.
      this.router.navigate(['welcome', this.username])
    } else {
      this.invalidLogin = true
    }
    //   console.log('Verified')
    // else
    //   console.log('Invalid Credentials')

  }

  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.invalidLogin = false
          this.router.navigate(['welcome', this.username])
        },

        error => {
          console.log(error)
          this.invalidLogin = true
        }
      )
  }
  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.invalidLogin = false
          this.router.navigate(['welcome', this.username])
        },

        error => {
          //console.log(error)
          this.invalidLogin = true
        }
      )
  }
}
