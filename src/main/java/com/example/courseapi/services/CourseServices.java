package com.example.courseapi.services;

import com.example.courseapi.models.Course;
import com.example.courseapi.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.List;

@Service
public class CourseServices {
    CourseRepository courseRepository;
    @Autowired
    CourseServices(CourseRepository cr){
        this.courseRepository=cr;
    }
    public Course viewcourse(int id){
        Optional<Course> course = courseRepository.findById(id);
        return course.get();
    }
    public List<Course> viewAllCourses(){
        return courseRepository.findAll();
    }

    public boolean addCourse(Course course){
        Course c=courseRepository.save(course);
        if(c!=null){
            return true;
        }
        return false;
    }

    public Course updateCourse(int id,Course course){
        Optional<Course> c1=courseRepository.findById(id);
        Course c=c1.get();
        c.setTitle(course.getTitle());
        c.setDescription(course.getDescription());
        c=courseRepository.save(c);
        return c;
    }

    public void deleteCourse(int id) {
        courseRepository.deleteById(id);
    }
}
