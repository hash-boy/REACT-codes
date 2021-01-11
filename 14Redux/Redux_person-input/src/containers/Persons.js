import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';


import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddedPerson} />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onRemovedPerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        prs: state.persons
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddedPerson: (name, age)=>dispatch({type: actionTypes.ADD_PERSON, personData: {name: name, age: age} }),
        onRemovedPerson: (id)=>dispatch({type: actionTypes.REMOVE_PERSON, pId: id})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Persons);