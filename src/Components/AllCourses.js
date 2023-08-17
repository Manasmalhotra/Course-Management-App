import React, {useEffect, useState} from 'react';
import Course from "./Course";
// eslint-disable-next-line react-hooks/rules-of-hooks
import axios from 'axios';
import base_url from "../api/bootapi";
import {toast} from "react-toastify";

const AllCourses=()=>{
    useEffect(()=>{
        document.title="AllCourses"
        axios.get(`${base_url}/viewallcourses`).then(
            (response)=>{
                console.log(response);
                setCourse(response.data);
                toast.success("Loaded courses successfully");
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong");
            }
        )
    },[]);
    const [courses,setCourse]=useState([]);
    const updateCourses=(id)=>{
        setCourse(courses.filter(c=>c.id!=id));
    }
        return(<div>
            <h1>All Courses</h1>
            <p>The courses are listed below:</p>
            {courses.length > 0 ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses}/>) : "No Course"
            }
            </div>
        );
}
export default AllCourses;