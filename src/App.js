import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import AdminPannel from "./components/Admin/AdminPannel";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Contact/Gallery";
import Footernav from "./components/Footernav";
import Home from "./components/Home/Homework";
import Navbar from "./components/Home/Navbar";
import MainLogin from "./components/Home/MainLogin";
import FacultyLogin from "./components/Home/login/FacultyLogin";
import FacultyRegister from "./components/Home/login/FacultyRegister";
import StudentRegister from "./components/Home/login/StudentRegister";
import StudentLogin from "./components/Home/login/StudentLogin";
import AddNewImg from "./components/Admin/AddNewImg";
import News from "./components/Admin/News&event";
// import AddFaq from "./components/Admin/AddFaq";
import FaqSection from "./components/Admin/FaqSection";
import StudentList from "./components/Admin/Studentlist"
import Timetable from "./components/Timetable/Timetable";
import Faculty from "./components/Profile/Faculty";
import Student from "./components/Profile/Student";
import AllGallery from "./components/Admin/AllImages";
import AdminGallery from "./components/Admin/AdminGallery";
import SetTimetable from "./components/Admin/SetTimetable"
import Onlinefee from "./components/Home/feeSection/Onlinefee";
import Sitemap from "./Sitemap";
import Principal from "./components/About/Principal";
import Director from "./components/About/Director";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Sitemap" element={<Sitemap />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/school" element={<About />} />
        <Route path="/about/principal" element={<Principal/>} />
        <Route path="/about/director" element={<Director />} />
        <Route path="/admissions" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/mainlogin" element={<MainLogin />} />
        <Route path="/facultylogin" element={<FacultyLogin />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/facultyregister" element={<FacultyRegister />} />
        <Route path="/studentregister" element={<StudentRegister />} />
        <Route path={`/admin`} element={<AdminPannel />} />
        <Route exact path={`/admin/addpic`} element={<AddNewImg />} />
        <Route exact path={`/admin/allgalleryimages`} element={<AllGallery />} />
        <Route exact path={`/admin/gallery`} element={<AdminGallery />} />
        <Route exact path={`/admin/news`} element={<News />} />
        <Route exact path={`/admin/faq`} element={<FaqSection />} />
        <Route exact path={`/admin/studentlist`} element={<StudentList />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path={`/facultyprofile/:id`} element={<Faculty />} />
        <Route path={`/studentprofile/:id`} element={<Student />} />
        <Route path={`/admin/timetable`} element={<SetTimetable/>} />
        <Route path={'/onlinefee'} element={<Onlinefee/>} />
      </Routes>
      <Footernav />
    </>
  );
};

export default App;
