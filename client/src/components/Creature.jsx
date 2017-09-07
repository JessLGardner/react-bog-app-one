import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CreatureStyles = styled.div`
  margin: 40px;
`;

class Creature extends Component {
  constructor(){
    super();
    this.state = {
      error: '',
      creature: {}
    }
  }

  componentWillMount(){
    this._fetchCreature();
  }

  _fetchCreature = async () => {
    try {
      const id = this.props.match.params.id;
      const res = await axios.get(`/api/creatures/${id}`);
      this.setState({
        creature: res.data
        })
    } catch (err) {
      this.setState({error: err})
    }
  }

  render() {
    return (
      <CreatureStyles>
        <h2>{this.state.creature.name}</h2>
        <p>{this.state.creature.description}</p>
        <button>edit</button>
        <button>delete</button>
      </CreatureStyles>
    );
  }
}

export default Creature;