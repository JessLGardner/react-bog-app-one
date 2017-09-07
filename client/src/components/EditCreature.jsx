import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class EditCreature extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false,
            creature: {
                name: '',
                description: ''
            }
        }
    }
    

    componentWillMount() {
        const creatureId = this.props.match.params.id
        this._fetchCreature(creatureId)       
    }

    _fetchCreature = async (creatureId) => {
        try {
            const res = await axios.get(`/api/creatures/${creatureId}`)
            await this.setState({
                creature: {
                    name: res.data.name,
                    description: res.data.description
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }   

    _editCreature = async (e) => {
        e.preventDefault();
        const creature = this.state.creature
        const creatureId = this.props.match.params.id
        try {
            const res = await axios.patch(`/api/creatures/${creatureId}`, creature)
            this.setState({ redirect: true })
        } 
        catch (err) {
            console.log(err)
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.creature}
        newState[e.target.name] = e.target.value
        this.setState({
            creature: newState
        })
    }

    render() {
      return (
            <div>
                <h1>Edit the Creature</h1>
                <form onSubmit={this._editCreature}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input onChange={this._handleChange} type="text" name="name" value={this.state.creature.name} />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input onChange={this._handleChange} type="text" name="description" value={this.state.creature.description} />
                    </div>
                    <button>Submit</button>
                </form>
                {this.state.redirect && (<Redirect to={`/creatures/${this.props.match.params.id}`}/>)}
            </div>
        );
    }
}

export default EditCreature;