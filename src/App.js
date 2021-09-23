import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Home from "./components/Home";
import  Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import KeeperApp from "./components/KeeperApp";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/Project" exact component={() => <Project />} />
          <Route path="/KeeperApp" exact component={() => <KeeperApp />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
