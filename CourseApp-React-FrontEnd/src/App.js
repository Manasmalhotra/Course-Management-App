import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import AllCourses from "./Components/AllCourses";
import Header from "./Components/Header";
import React, {Fragment} from "react";
import AddCourse from "./Components/AddCourse";
import {toast,ToastContainer} from 'react-toastify';
import {Container, Row,Col} from "reactstrap";
import Menu from "./Components/Menu";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Update from "./Components/Update";
import Search from "./Components/Search";
function App() {
  return (
      <BrowserRouter>

          <ToastContainer/>
          <Container>
              <Header/>
              <Row>
                  <Col md={4}>
                      <Menu/>
                  </Col>
                  <Col md={8}>
                      <Routes>
                          <Route path="/" element={<Home/>}/>
                              <Route path="/addcourse" element={<AddCourse/>} />
                              <Route path="/viewallcourses" element={<AllCourses/>} />
                              <Route path="/aboutus" element={<AboutUs/>} />
                              <Route path="/contact" element={<Contact/>} />
                              <Route path="/update/:id" element={<Update/>} />
                              <Route path="/search/:query" element={<Search/>} />
                      </Routes>
                  </Col>

              </Row>
          </Container>
</BrowserRouter>
  );
}

export default App;
