package com.propertymanagmnetportal.pmp.Exceptions;

public class EmailExistException extends RuntimeException {
    public EmailExistException(String message) {
        super(message);
    }
}
