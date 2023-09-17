import React from 'react';
import { Card, Button, CardTitle, CardBody, CardText } from 'reactstrap';
import {base_url} from "../api/bootapi";
import axios from 'axios';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
const Course= ({course,update}) =>{
    const navigate = useNavigate();
    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/delete/${id}`).then(
            (response)=>{
                update(id);
                toast.success("Course Deleted");
            },
        (error)=>{
                toast.error("Course not deleted. Server Issue.");
        }
        )
    }
    const editCourse=(id)=>{
        navigate(`/update/${id}`);
    }
   return( <Card className="text-center">
    <CardBody>
        <CardTitle>{course.title}</CardTitle>
        <CardText>{course.description}</CardText>
        Rating:<CardText>{course.rating}</CardText>
        <Button color="danger" onClick={()=>deleteCourse(course.id)}>Delete</Button>
        <Button color="warning" onClick={()=>editCourse(course.id)}>Update</Button>


    </CardBody>
    </Card>
   );
}
export default Course;
