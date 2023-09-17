package com.example.courseapi.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Getter
@Setter
public class Course {
    @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String title;
    String description;
    double rating;
}
