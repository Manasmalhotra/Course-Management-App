import React, {useEffect, useState} from 'react';
import Course from "./Course";
// eslint-disable-next-line react-hooks/rules-of-hooks
import {toast} from "react-toastify";
import {Button, Container, Pagination, PaginationItem, PaginationLink} from "reactstrap";
import {searchCourse, sortCourses} from "../api/user-service";
import {useParams} from "react-router";

const Search=()=>{
    const [courseContent, setCourseContent] = useState({
        courses: [],
        totalPages: '',
        sortBy:'title',
        sortDir:'ASC',
        totalElements: '',
        pageSize: '',
        lastPage: false,
        pageNumber: ''

    })
    const query=useParams().query;
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        console.log("loading posts")
        console.log(currentPage)
        changePage(currentPage)

    },[])

    const changePage = (pageNumber = 0, pageSize = 5,sortDir) => {
        if (pageNumber > courseContent.pageNumber && courseContent.lastPage) {
            return
        }
        if (pageNumber < courseContent.pageNumber &&  courseContent.pageNumber == 0) {
            return
        }
        setCurrentPage(pageNumber);
        let selectElement = document.querySelector('#sorting');
        let sortBy = selectElement.value;
        searchCourse(query,pageNumber, pageSize,sortBy,sortDir).then(data => {
            setCourseContent({
                courses: [...data.courses],
                sortDir: sortDir,
                sortBy:sortBy,
                totalPages: data.totalPages,
                totalElements: data.totalElements,
                pageSize: data.pageSize,
                lastPage: data.last,
                pageNumber: data.pageNo
            })

            console.log(data);

        }).catch(error => {
            console.log(error)
            toast.error("Error in loading posts")

        })
    }
    const updateCourses=(id)=>{
        let courseslist=courseContent.courses.filter(c=>c.id!=id);
        setCourseContent({ ...courseContent, courses: courseslist})
    }
    return(<div>
            <h1>Search Results:</h1>
            <form>
                <label htmlFor="sorting">Sort By: </label>
                <select name="sorts" id="sorting">
                    <option value="title">Title</option>
                    <option value="description">Description</option>
                    <option value="rating">Rating</option>
                </select>
                <label htmlFor="search">Search: </label>
                <input type="text" id="search"/>
                <br></br>
                <br></br>
                <Button onClick={()=>changePage(currentPage,courseContent.pageSize,'ASC')}>Ascending</Button>{'      '}
                <Button onClick={()=>changePage(currentPage,courseContent.pageSize,'DSC')}>Descending</Button>
            </form>
            <br></br>
            <p>The search results are listed below:</p>
            {courseContent.courses.length > 0 ? courseContent.courses.map((item) => <Course key={item.id} course={item} update={updateCourses}/>) : "No Course"
            }
            <Container>
                <Pagination>
                    <PaginationItem>
                        <PaginationLink onClick={()=>{changePage(currentPage-1,courseContent.pageSize,courseContent.sortDir)}} disabled={courseContent.pageNumber===0}
                                        previous
                        />
                    </PaginationItem>


                    {
                        [...Array(courseContent.totalPages)].map((item,index)=>(
                            <PaginationItem onClick={()=>changePage(index,courseContent.pageSize,courseContent.sortDir)} active={courseContent.pageNumber==index} key={index}>
                                <PaginationLink>
                                    {index+1}
                                </PaginationLink>
                            </PaginationItem>

                        ))
                    }
                    <PaginationItem onClick={()=>changePage(currentPage+1,courseContent.pageSize,courseContent.sortDir)} disabled={courseContent.lastPage}>
                        <PaginationLink
                            next
                        />
                    </PaginationItem>
                </Pagination>
            </Container>
        </div>
    );
}

export default Search;