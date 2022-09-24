package com.propertymanagmnetportal.pmp.Exceptions;

public class AuthorizationHeaderNotPresent extends RuntimeException{

    public AuthorizationHeaderNotPresent(String message){
        super(message);
    }
}
