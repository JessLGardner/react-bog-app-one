import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import CreatureList from './components/CreatureList'
import Creature from './components/Creature'
import NewCreature from './components/NewCreature'
import EditCreature from './components/EditCreature'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import GlobalNav from './components/GlobalNav';
import {setAxiosDefaults} from './util';


class App extends Component {

  componentWillMount(){
    setAxiosDefaults()
  }


  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/" component={CreatureList}/>
          <Route exact path="/new" component={NewCreature}/>
          <Route exact path="/signUp" component={SignUp}/>
          <Route exact path="/signIn" component={SignIn}/>
          <Route exact path="/creatures/:id" component={Creature}/>
          <Route exact path="/creatures/:id/edit" component={EditCreature}/>
        </div>
      </Router>
    );
  }
}

export default App;

