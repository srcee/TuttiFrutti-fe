import React from 'react';
import Navbar from './components/Navbar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import AddFruit from './screens/AddFruit/AddFruit';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/add-fruit' component={AddFruit} />
      </Switch>
    </Router>
  );
}

export default App;