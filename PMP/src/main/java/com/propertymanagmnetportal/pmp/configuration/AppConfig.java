package com.propertymanagmnetportal.pmp.configuration;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessagePreparator;

import javax.annotation.ManagedBean;
import javax.mail.internet.MimeMessage;
import java.io.InputStream;

@Configuration
public class AppConfig {
    @Bean
    public JavaMailSenderImpl mailSender() {
        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();

        javaMailSender.setProtocol("SMTP");
        javaMailSender.setPort(587);

        return javaMailSender;
    }


}
