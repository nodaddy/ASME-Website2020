import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Socialrec from "./components/socialReac";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import Resource from "./components/Resources";
function App() {
  return (
    <div>
      <Socialrec />
      <Navbar />
      <Router>
        <Route exact path={`/`} component={Home} />
        <Route exact path={`/team`} component={Team} />
        <Route exact path={`/contactus`} component={ContactUs} />{" "}
        <Route exact path={`/resources`} component={Resource} />
      </Router>
    </div>
  );
}

export default App;
