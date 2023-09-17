package com.example.courseapi.controllers;

import com.example.courseapi.models.Course;
import com.example.courseapi.models.CourseResponse;
import com.example.courseapi.services.CourseServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.example.courseapi.constants.constants.DEFAULT_PAGENO;
import static com.example.courseapi.constants.constants.DEFAULT_PAGESIZE;

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
    CourseResponse viewAllCourses(
            @RequestParam(value="pageNo",defaultValue=DEFAULT_PAGENO,required = false) int pageNo,
            @RequestParam(value="pageSize",defaultValue =DEFAULT_PAGESIZE,required=false) int pageSize,
            @RequestParam(value="sortBy",defaultValue = "id",required=false) String sortBy,
            @RequestParam(value="sortDir",defaultValue = "ASC",required=false) String sortDir
    ){
        return courseService.viewAllCourses(pageNo,pageSize,sortBy,sortDir);
    }

    @GetMapping("/viewallcourses/search")
    public CourseResponse searchCourses(@RequestParam(value="query",required=false) String query,
                                        @RequestParam(value="pageNo",defaultValue=DEFAULT_PAGENO,required = false) int pageNo,
                                        @RequestParam(value="pageSize",defaultValue =DEFAULT_PAGESIZE,required=false) int pageSize,
                                        @RequestParam(value="sortBy",defaultValue = "id",required=false) String sortBy,
                                        @RequestParam(value="sortDir",defaultValue = "ASC",required=false) String sortDir){
        return courseService.searchCourses(query,pageNo,pageSize,sortBy,sortDir);
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
