import React, {Component} from 'react';
import Person from '../components/Persons/Person/Person';
import classes from './App.module.css';

class App extends Component {
  state = ({
    persons: [
      {id: 'N1', name: 'Justinas', age: 27 },
      {id: 'N2', name: 'Sarunas', age: 26 },
      {id: 'N3', name: 'Karolis', age: 28 }
    ],
    otherState: "otherState"
  });

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Sarunas', age: 69 },
        { name: 'Karolis', age: 420 }
      ],
      showPersons: false
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} 
            />
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    )
  };
};

export default App;
