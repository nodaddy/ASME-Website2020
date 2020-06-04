import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Socialrec from './components/socialReac'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Team from './components/Team'
function App() {
  return (
    <div>
    <Socialrec />
    <Navbar />
    <Router>
    <Route
          exact
          path={`/`}
          component={ Home }
        />
    <Route
          exact
          path={`/team`}
          component={ Team }
        />
    </Router>  
    </div>
  );
}

export default App;
