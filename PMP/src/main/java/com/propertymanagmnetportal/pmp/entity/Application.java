package com.propertymanagmnetportal.pmp.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class Application {
    @EmbeddedId
    private ApplicationCompositeKey compositeKey;

    private String message;
    private String fullname;
    private String phonenumber;
    private LocalDate date;

    @ManyToOne
    @MapsId("user_id")
    private User user;

    @ManyToOne
    @MapsId("property_id")
    private Property property;

}
