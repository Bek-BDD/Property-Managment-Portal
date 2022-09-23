package com.propertymanagmnetportal.pmp.Utility;

import javax.mail.SendFailedException;

public interface EmailService {
    public boolean sendEmail (String to, String subject, String message);
}
