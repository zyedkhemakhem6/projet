import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import SignInForm from "./pages/SignInForm";
import DestinationsContainer from "./pages/DestinationContainer";
import DestinationsContainerAdmin from "./pages/DestinationContainerAdmin.jsx";
import Accomodation from "./pages/Accomodation.jsx";
import AccomodationAdmin from "./pages/AccomodationAdmin.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/destination" element={< DestinationsContainer />} />
      <Route path="/destinationadmin" element={< DestinationsContainerAdmin />} />
      <Route path="/accomodation" element={< Accomodation />} />
      <Route path="/accomodationadmin" element={< AccomodationAdmin />} />

    </Routes>
  );
}
