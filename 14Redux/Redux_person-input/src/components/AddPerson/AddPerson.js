import React, { Component } from 'react';

import './AddPerson.css';

class addPerson extends Component {
    state = {
        name: '',
        age: ''
    }
    nameChangeHandler = event =>{
        this.setState({ name: event.target.value });
    }
    ageChangeHandler = event =>{
        this.setState({ age: event.target.value });
    } 

    inputHandler = event =>{
        event.preventDefault();
        this.setState({name: '', age: ''});
    }
    render(){
        return(
            <form onSubmit={this.inputHandler} className="AddPerson">
                    <input 
                        type="text" 
                        placeholder="your name" 
                        onChange={this.nameChangeHandler}
                        value={this.state.name} />
                    <input 
                        type="number" 
                        placeholder="age" 
                        onChange={this.ageChangeHandler}
                        value={this.state.age} />
                        
                    <button onClick={()=>this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
             </form>
        );
    }
} 

export default addPerson;