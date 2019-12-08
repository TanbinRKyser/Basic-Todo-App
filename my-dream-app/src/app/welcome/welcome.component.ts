// package com.tusker.basic

// import org.springframework.boot.SpringApplication
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { WelcomeDataService } from '../service/data/welcome-data.service';

// @ComponentScane( value="someClasspath.somePath")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
// public class SpringFirstApp implements SomeInterface
export class WelcomeComponent implements OnInit {

  // String message = "Welcome Message";
  // message = 'Welcome Message'
  message: string = 'Welcome Message'
  messageFromService: string
  errorMessage: string
  name = ''
  // public SpringFirstApp()

  // ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  // void init()
  ngOnInit() {
    //console.log(this.message)
    this.name = this.route.snapshot.params['name']
    sessionStorage.setItem('username', this.name)
    //console.log( this.route.snapshot.params['name'] );

  }

  getWelcomeMessage() {
    // console.log(this.service.executeHelloWorldBeanService())
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )
    // console.log("last line of welcome")
    // console.log("get welcome message")
  }

  getWelcomeMessageWithParameter() {
    // console.log(this.service.executeHelloWorldBeanPathVariableService(name))
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )

  }

  handleSuccessfulResponse(response) {
    // console.log(response.message)
    this.messageFromService = response.message
  }

  handleErrorResponse(error) {
    // console.log(error)
    // console.log(error.error)
    // console.log(error.error.message)
    this.errorMessage = error.error.message
  }
}
