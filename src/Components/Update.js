import React, {useState, Fragment, useEffect} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axios from 'axios';
import base_url from "../api/bootapi";
import {toast} from "react-toastify";
import AllCourses from "./AllCourses";
import {useLocation, useNavigate, useParams} from "react-router";

const Update=()=>{
    const [course,setCourse]= useState({});
    const params = useParams().id;
    const navigate = useNavigate();
    console.log(params);
    useEffect(() => {
        axios.get(`${base_url}/viewcourse/${params}`).then(
            (response)=>{
                setCourse(response.data);
            },
            (error)=>{
                toast.error("Course not found");
            }
        )
    },[]);
    const handleUpdate=(e)=>{
        console.log(course);
        e.preventDefault();
        axios.put(`${base_url}/update/${params}`,course).then(
            (response)=>{
                console.log("Hello");
                toast.success("Updated successfully");
                navigate("/viewallcourses");
            },
        (error)=>{
                toast.error("Something went wrong");
        }
        )
    }
   return(
       <Fragment>
           <Form onSubmit={handleUpdate}>
               <FormGroup>
                   <Label for="title">Title: </Label>
                   <Input id="title"
                          type="text"
                          value={course.title ?? ''}
                          onChange={(e)=>{
                              setCourse({...course,title:e.target.value});
                          }}
                   />

               </FormGroup>
               <FormGroup>
                   <Label for="description">Description</Label>
                   <Input id="description"
                          type="text"
                          value={course.description ?? ''}
                          onChange={(e)=>{
                              setCourse({...course,description:e.target.value});
                          }}/>
               </FormGroup>
               <Button type="submit" color="success">Update </Button>
               <Button type="reset" color="warning">Clear</Button>
           </Form>
       </Fragment>
   );
}

export default Update;