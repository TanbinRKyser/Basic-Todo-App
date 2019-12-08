package com.tusker.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.*;

// Controller
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
    // Create a method, that will return a hello world

    // 1. Method :  GET
    // 2. Path :  URI - /hello-world
    //    @RequestMapping( method = RequestMethod.GET, path = "/hello-world" )
    @GetMapping(path = "/hello-world")
    // 3. Method - Hello World !!
    public String helloWorld(){
        return "Hello World!!";
    }

//    Path: "/hello-world-bean"
    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
	throw new RuntimeException("Something went wrong, Please contact support. Thanks.");
        // return new AuthenticationBean("Hello World Bean!!");
    }

//     Using a path variable in the URI
//     Path: "/hello-world-bean/path-variable/{variable_name}"
    @GetMapping(path = "/hello-world-bean/path-variable/{name}")
    public HelloWorldBean helloWorldBeanWithPathVariable( @PathVariable String name){
        return new HelloWorldBean( String.format( "Hello World, %s", name ) );
    }


}
