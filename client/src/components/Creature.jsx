import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

const CreatureStyles = styled.div`
  margin: 40px;
`;

class Creature extends Component {
  constructor(){
    super();
    this.state = {
      error: '',
      redirect: false,
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

  _deleteCreature = async () => {
    try {
      const id = this.props.match.params.id;
      const res = await axios.delete(`/api/creatures/${id}`)
      const redirect = !this.state.redirect
      this.setState({ redirect })

    }
    catch (err) {
    this.setState({error: err})
  }  }

  render() {
    return (
      <CreatureStyles>
        <h2>{this.state.creature.name}</h2>
        <p>{this.state.creature.description}</p>
        <Link to={`/creatures/${this.state.creature.id}/edit`}>edit</Link>
        <button onClick={this._deleteCreature}>delete</button>
        {this.state.redirect && (<Redirect to={`/`}/>)}
      </CreatureStyles>
    );
  }
}

export default Creature;