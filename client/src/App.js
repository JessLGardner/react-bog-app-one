import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import CreatureList from './components/CreatureList'
import Creature from './components/Creature'
import NewCreature from './components/NewCreature'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={CreatureList}/>
          <Route exact path="/creatures/:id" component={Creature}/>
          <Route exact path="/creatures/new" component={NewCreature}/>
        </div>
      </Router>
    );
  }
}

export default App;

