import React, {Component} from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';

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

    if (this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    )
  };
};

export default App;
