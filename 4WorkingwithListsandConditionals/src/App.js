import React, { Component } from 'react';

import Person from './Person/Person'
import './App.css';

class App extends Component{

  state = {
    persons: [
      {id: '1', name: 'max', age: 28},
      {id: '2', name: 'rose', age: 30},
      {id: '3', name: 'step', age: 19}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNamehandler = (newName) =>{
    this.setState({
      persons:[
        {id: '1', name: newName, age: 28},
        {id: '2', name: 'rose', age: 30},
        {id: '3', name: 'step', age: 19}
      ]
    });
  }

  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    })

    const personNew = {
      ...this.state.persons[personIndex]
    }

    personNew.name = event.target.value;
    

    const personsUpdate = [...this.state.persons];
    personsUpdate[personIndex] = personNew;

    this.setState({persons: personsUpdate});
  }

  togglePersonHandler = ()=>{
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonHandler = index =>{  
    //const persons = this.state.persons;
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }


  render(){

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index)=>{
               return <Person 
                click = {()=> this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event)=>this.nameChangeHandler(event, person.id)}
              />
            })
          }
        </div>
      );
    } 


    return(
      <div className="App">
          <button onClick={this.togglePersonHandler}>change names</button>
          { persons }
      </div>
    );
  }
  
}

export default App;

  /*
  state = {
   person:[
     {name: 'max', age:20},
     {name: 'xxx', age:30},
     {name: 'yyy', age:40}
   ]
 };

  switchHandler = n =>{
    this.setState({
      person:[
        {name: n, age:20},
        {name: 'x', age:30},
        {name: 'y', age:40}
      ]
    });
  }

 
  render() {
    return (
      <div className="App">
        <button onClick={this.switchHandler.bind(this,'riad')}>click</button>
        <Person 
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        > hey bro </Person>
      </div>
    );
  } 
  */

  /** with class
   * const[state,setstate] = useState({
   person:[
     {name: 'max', age:20},
     {name: 'xxx', age:30},
     {name: 'yyy', age:40}
   ]
 });

  const switchHandler = () =>{
    setstate({
      person:[
        {name: 'z', age:20},
        {name: 'x', age:30},
        {name: 'y', age:40}
      ]
    });
  }

 

    return (
      <div className="App">
        <button onClick={switchHandler}>click</button>
        <Person 
          name={state.person[0].name}
          age={state.person[0].age}
        > hey bro </Person>
      </div>
    );

    */