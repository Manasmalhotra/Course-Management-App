import {myaxios} from "./bootapi";
import axios from 'axios';


export const getAllCourses=(pageNumber,pageSize)=> {
    let ROOT_URL="http://mycoursesapp.ap-south-1.elasticbeanstalk.com";
    return axios.get(`${ROOT_URL}/viewallcourses?pageNo=${pageNumber}&pageSize=${pageSize}`).then(response => response.data);
}
export const sortCourses=(pageNumber,pageSize,sortBy,sortDir)=>{
    let ROOT_URL="http://mycoursesapp.ap-south-1.elasticbeanstalk.com";
     return axios.get(`${ROOT_URL}/viewallcourses?pageNo=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`).then(response=>response.data);

}

export const searchCourse=(query,pageNumber,pageSize,sortBy,sortDir)=>{
    let ROOT_URL="http://mycoursesapp.ap-south-1.elasticbeanstalk.com";
    return axios.get(`${ROOT_URL}/viewallcourses/search?query=${query}&pageNo=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`).then(response=>response.data);
}



