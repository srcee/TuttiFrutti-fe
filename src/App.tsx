import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "src/components/Navbar/NavBar";
import Home from "src/screens/Home/Home";
import AddFruit from "src/screens/AddFruit/AddFruit";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-fruit" component={AddFruit} />
      </Switch>
    </Router>
  );
};

export default App;
