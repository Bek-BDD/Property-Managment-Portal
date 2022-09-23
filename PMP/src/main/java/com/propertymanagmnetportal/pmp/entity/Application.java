package com.propertymanagmnetportal.pmp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Application {
    @EmbeddedId
    private ApplicationCompositeKey compositeKey;
    private LocalDateTime Date;

    @ManyToOne
    @MapsId("user_id")
    private Customer customer;

    @ManyToOne
    @MapsId("property_id")
    private Property property;

}
