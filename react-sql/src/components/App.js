import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Scoreboard, Contact, ServerIP } from ".";
function App() {
  return (
    <div className="App">
      <Router>
      <ServerIP />
        <Navigation />
       
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/scoreboard" exact component={() => <Scoreboard />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;