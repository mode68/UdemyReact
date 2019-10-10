import React from 'react';
import classes from "./Person.module.css";

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            {props.children ? <p>{props.children}</p> : null}
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default person;