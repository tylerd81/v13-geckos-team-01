<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
=======
import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

>>>>>>> dev

import Sample from "./pages/sample";
import GetStarted from "./pages/getStarted";
import AddItUp from "./pages/addItUp";
import Results from "./pages/results";

import MainContainer from "./Components/MainContainer";
import MainNavBar from "./Components/MainNavbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <MainContainer>
      <Router>
        <MainNavBar />
        <Switch>
          <Route exact path="/" component={GetStarted} />
          <Route exact path="/search" component={AddItUp} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/sample" component={Sample} />
        </Switch>
        <Footer />
      </Router>
    </MainContainer>
  );
}

export default App;
