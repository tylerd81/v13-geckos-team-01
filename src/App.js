import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sample from "./pages/sample";
import GetStarted from "./pages/getStarted";
import AddItUp from "./pages/addItUp";
import Results from "./pages/results";
import MainNavbar from "./Components/MainNavbar";
import Footer from "./Components/Footer";
import ItemList from "./pages/ItemList";

// Context stuff
import ItemListState from "./context/ItemListState";

function App() {
  return (
    <div className="App">
      <ItemListState>
        <Router>
          <MainNavbar />
          <Switch>
            <Route exact path="/" component={GetStarted} />
            <Route exact path="/search" component={AddItUp} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/sample" component={Sample} />
            <Route exact path="/itemlist" component={ItemList} />
          </Switch>
          <Footer />
        </Router>
      </ItemListState>
    </div>
  );
}

export default App;
