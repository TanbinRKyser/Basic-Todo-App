package com.tusker.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {

  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
  private String password;

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0dXNrZXIiLCJleHAiOjE1NTg5NTMwOTcsImlhdCI6MTU1ODM0ODI5N30._OVTfk-EfRfXiv1tbrY5QE5uSzGIFXuIkMTvttav-fVJgG0vi201bcDVvz4sM5AJiMibL5xe8STaVnTSj-ZEgA"
//    }

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
