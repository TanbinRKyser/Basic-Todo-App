package com.tusker.rest.webservices.restfulwebservices.helloworld;

public class HelloWorldBean {

    private String message;

    public HelloWorldBean( String message ) {
        this.message = message;
    }

    public void setMessage( String message ) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    @Override
    public String toString() {
        return "AuthenticationBean{" +
                "message='" + message + '\'' +
                '}';
    }
}
