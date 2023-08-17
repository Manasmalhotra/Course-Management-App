package com.example.courseapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.courseapi.models.Course;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course,Integer> {
}
