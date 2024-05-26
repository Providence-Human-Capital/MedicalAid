import { useState } from "react";
import "./App.css";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeInit from "./HomeInit";
import Home from "./views/Home/Home";
import ContactUs from "./views/Contact/ContactUs";
import SelfService from "./views/SelfService/SelfService";

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
        </Route>
      </Routes>
    </>
  );
};

export default App;

export { WrapperComponent };
