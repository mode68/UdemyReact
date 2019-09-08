import React from 'react';
import "./Person.css";

const person = (props) => {

    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            {props.children ? <p>{props.children}</p> : null}
            <input type='text' onChange={props.changed} value={props.name}></input>
            {/* <p>{props.children}</p> */}
        </div>
    )
};

export default person;