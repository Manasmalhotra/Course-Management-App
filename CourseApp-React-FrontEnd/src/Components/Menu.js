import React from 'react';
import {Link} from "react-router-dom";
import {ListGroup} from "reactstrap";

const Menu=()=>{
    return (<ListGroup>
    <Link className="list-group-item list-group-item-action" tag="a" to="/" action >Home</Link>
    <Link className="list-group-item list-group-item-action" tag="a" to="/addcourse" action>Add Course</Link>
    <Link className="list-group-item list-group-item-action" tag="a" to="/viewallcourses" action>View courses</Link>
    <Link className="list-group-item list-group-item-action" tag="a" to="/aboutus" action>About Us</Link>
    <Link className="list-group-item list-group-item-action" tag="a" to="/contact" action>Contact Us</Link>
        </ListGroup>
    );
}
export default Menu;