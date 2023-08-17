package com.example.courseapi.controllers;

import com.example.courseapi.models.Course;
import com.example.courseapi.services.CourseServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class CourseController {
    CourseServices courseService;
    @Autowired
    CourseController(CourseServices cs){
        this.courseService=cs;
    }

    @GetMapping("viewcourse/{id}")
    Course viewcourse(@PathVariable int id){
        return courseService.viewcourse(id);
    }
    @GetMapping("viewallcourses")
    List<Course>viewAllCourses(){
        return courseService.viewAllCourses();
    }
    @PostMapping("addcourse")
    boolean addCourse(@RequestBody Course course){
        return courseService.addCourse(course);
    }
    @PutMapping("update/{id}")
    Course updateCourse(@PathVariable int id,@RequestBody Course course){
        return courseService.updateCourse(id,course);
    }
    @DeleteMapping("delete/{id}")
    void deleteCourse(@PathVariable int id){
        courseService.deleteCourse(id);
    }
}
