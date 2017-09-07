import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class NewCreature extends Component {
  constructor(){
    super();
      this.state = {
        redirect: false,
        creatureId: null,
        creature: {
          name: '',
          description: ''
        }
      }
  }

  _handleChange = (e) => {
    const newState = {...this.state.creature};
      newState[e.target.name] = e.target.value;
      this.setState({
          creature: newState
      });
  }
    
  _addCreature = async (e) => {
    e.preventDefault();
    const payload = this.state.creature
    try {
        const res = await axios.post('/api/creatures', payload)
        console.log(res)
        const creatureId = res.data.id;
        const redirect = !this.state.redirect
        this.setState({creatureId})
        this.setState({ redirect })
    } 
      catch (err) {
          console.log(err)
      }
  }
      
  render() {
    return (
      <div>
        <form onSubmit={this._addCreature}>
            <div>
            <label htmlFor="name">Name: </label>
            <input onChange={this._handleChange} type="text" name="name" value={this.state.creature.name} />
            </div>
            <div>
            <label htmlFor="description">Description: </label>
            <input onChange={this._handleChange} type="text" name="description" value={this.state.creature.description} />
            </div>            
            <button>Add New Creature</button>
        </form>
        {this.state.redirect && (
          <Redirect to={`/creatures/${this.state.creatureId}`}/>
        )}
    </div>
    )
  }
}

export default NewCreature;