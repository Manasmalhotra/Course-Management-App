import React, {useEffect} from 'react';
import { Button,Container, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Fragment, useState} from "react";
import axios from 'axios';
import {toast} from "react-toastify";
import {base_url} from "../api/bootapi";
const AddCourse=()=>{
    const [course,setCourse]=useState({});
    const handleForm=(e)=>{
      console.log(course);
      postDataToForm(course);
      e.preventDefault();
      document.getElementById("addcourseform").reset();
      setCourse({title:"",description:"",createdAt:"",rating:0});
    };

    const postDataToForm=(data)=>{
      axios.post(`${base_url}/addcourse`,data).then(
          (response)=>{
              toast.success("Course has been added successfully!");
          },
      (error)=>{
             toast.error("Someting went wrong");
        }
      )
    };

    return(
    <Fragment>
        <h1 className="text-center my-3">Fill Course Detail</h1>
        <Form id="addcourseform" onSubmit={handleForm}>

            <FormGroup>
                <Label for="title">Title:</Label>
                <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Please enter title"
                    onChange={(e)=>{
                        setCourse({...course,title:e.target.value});
                    }}
                 />
            </FormGroup>
            <FormGroup>
                <Label for="description">Description:</Label>
                <Input
                    type="textarea"
                    name="desc"
                    id="description"
                    placeholder="Please enter description"
                    onChange={(e)=>{
                        setCourse({...course,description:e.target.value});
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label for="rating">Rating:</Label>
                <Input
                    type="number"
                    step="0.01"
                    name="rating"
                    min="0"
                    max="5"
                    id="rating"
                    placeholder="Please enter rating"
                    onChange={(e)=>{
                        setCourse({...course,rating:e.target.value});
                    }}
                />
            </FormGroup>
            <Container>
                <Button type="submit" color="success">Add Course</Button>
                <Button type="reset" onClick={()=>{setCourse({title:"",description:""});}} color="warning ms-2">Clear</Button>
            </Container>
        </Form>
    </Fragment>
    );
}
export default AddCourse;