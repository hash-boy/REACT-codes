import React from 'react';

const person = props =>{
    const style = {
        backgroundColor: 'gray',
        color: 'white',
        border: '1px solid blue',
        width: '20rem',
        padding: '.5rem',
        wordWrap: 'wrap',
        margin: '1rem'
    }
    return(
        <div style={style}>
            <p >{props.name} and {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <button onClick={props.click}>click</button>
        </div>
    );
}

export default person;