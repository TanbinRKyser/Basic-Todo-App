import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from 'src/app.constants';

export const TOKEN = 'token'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username, password) {
    // Watch out for the syntax in localhost ``. And check how to pass a parameter.
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader()
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, { headers }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticateUser', username)
          sessionStorage.setItem(TOKEN, basicAuthHeaderString)
          return data
        }
      )
    )
  }

  // Creating a JWT authentication service
  executeJWTAuthenticationService(username, password) {

    return this.http.post<any>(`${API_URL}/authenticate`, { username, password }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticateUser', username)
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
          return data
        }
      )
    )
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'tusker'
  //   let password = 'dummy'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)

  //   return basicAuthHeaderString
  // }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticateUser')
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN)
    }
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticateUser')
  }
}

export class AuthenticationBean {
  constructor(public message: string) { }
}