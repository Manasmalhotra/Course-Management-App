package com.example.courseapi.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

    @Data
    @AllArgsConstructor
    public class CourseResponse {
        List<Course> courses;
        int pageNo;
        int pageSize;
        long totalElements;
        int totalPages;
        boolean last;
    }
