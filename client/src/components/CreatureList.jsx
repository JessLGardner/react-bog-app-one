import React, { Component } from 'react';
import axios from 'axios';
import CreatureCard from './CreatureCard';
import NewCreature from './NewCreature';
import styled from 'styled-components';


const CreatureListStyles = styled.div`
  margin: 20px 5%;
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

class CreatureList extends Component {
  constructor(){
    super();
    this.state = {
      error: '',
      creatures: []
    }
  }

  componentWillMount(){
    this._fetchCreatures();
  }

  _fetchCreatures = async () => {
    try {
      const response = await axios.get('/api/creatures');
      const creatures = response.data;
      this.setState({creatures});
    } catch (err) {
      this.setState({error: err})
    }
  }

  render() {
    return (
      <div>
        <h1>Teh Kreaturs</h1>
        <CreatureListStyles>
          {this.state.creatures.map((creature) => (
            <CreatureCard key={creature.id} creature={creature} />
          ))}
        </CreatureListStyles>


      </div>
    );
  }
}

export default CreatureList;