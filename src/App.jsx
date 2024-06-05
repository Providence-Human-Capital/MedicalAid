import { useState } from "react";
import "./App.css";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeInit from "./HomeInit";
import Home from "./views/Home/Home";
import ContactUs from "./views/Contact/ContactUs";
import SelfService from "./views/SelfService/SelfService";
import LivingStyle from "./views/LivingStyle/LivingStyle";
import InfoHub from "./views/Info/InfoHub";
import Clinics from "./views/Clinics/Clinics";
import DoctorList from "./views/Doctors/DoctorList";

const App = () => {
  return (
    <>
      <HashRouter>
        <WrapperComponent />
      </HashRouter>
    </>
  );
};

const WrapperComponent = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navigate to={"/home"} />} />
        <Route exact path="/" element={<HomeInit />}>
          <Route path="/home" element={<Home />} />
          <Route path="/contact/us" element={<ContactUs />} />
          <Route path="/self/service" element={<SelfService />} />
          <Route path="/living/style" element={<LivingStyle />} />
          <Route path="/info/hub" element={<InfoHub />} />
          <Route path="/clinic/location" element={<Clinics />} />
          <Route path="/doctor/lnfo" element={<DoctorList />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

export { WrapperComponent };
