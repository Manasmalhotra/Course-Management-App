package com.example.courseapi.services;

import com.example.courseapi.models.Course;
import com.example.courseapi.models.CourseResponse;
import com.example.courseapi.repositories.CourseRepository;
import org.hibernate.boot.model.source.spi.Sortable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
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
    public CourseResponse viewAllCourses(int pageNo, int pageSize,String sortBy,String sortDir){
        Sort sort=sortDir.equalsIgnoreCase("ASC")?Sort.by(sortBy).ascending():Sort.by(sortBy).descending();
        Pageable page= PageRequest.of(pageNo,pageSize,sort);
        Page<Course> content=courseRepository.findAll(page);
        return new CourseResponse(content.getContent(),page.getPageNumber(),page.getPageSize(),content.getTotalElements(), content.getTotalPages(), content.isLast());
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
        c.setRating(course.getRating());
        c=courseRepository.save(c);
        return c;
    }

    public void deleteCourse(int id) {
        courseRepository.deleteById(id);
    }
    public CourseResponse searchCourses(String query,int pageNo,int pageSize,String sortBy,String sortDir){
        Sort sort=sortDir.equalsIgnoreCase("ASC")?Sort.by(sortBy).ascending():Sort.by(sortBy).descending();
        Pageable page= PageRequest.of(pageNo,pageSize,sort);
        Course course=new Course();
        course.setTitle(query);
        course.setDescription(query);
        ExampleMatcher customExampleMatcher = ExampleMatcher.matchingAny()
                .withMatcher("title", ExampleMatcher.GenericPropertyMatchers.contains().ignoreCase())
                .withMatcher("description", ExampleMatcher.GenericPropertyMatchers.contains().ignoreCase());
        Example<Course> courseExample= Example.of(course, customExampleMatcher);
        Page<Course> content=courseRepository.findAll(courseExample,page);
        return new CourseResponse(content.getContent(),page.getPageNumber(),page.getPageSize(),content.getTotalElements(), content.getTotalPages(), content.isLast());
    }
}
