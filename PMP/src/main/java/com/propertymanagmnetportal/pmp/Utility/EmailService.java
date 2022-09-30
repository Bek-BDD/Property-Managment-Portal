package com.propertymanagmnetportal.pmp.Utility;

public interface EmailService {
    public boolean sendEmail(String to, String subject, String message);
}
