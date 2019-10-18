import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from "./Person.module.css";
import Aux from '../../../hoc/Auxilary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
        console.log('[Person.js] constructor this.inputElementRef: ', this.inputElementRef);
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        console.log('[Person.js] componentDidMount, this.context.authenticated: ', this.context.authenticated);
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        console.log('[Person.js] isAuth: ', this.props.isAuth);
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                {this.props.children ? <p>{this.props.children}</p> : null}
                <input 
                    type='text' 
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={this.props.changed} 
                    value={this.props.name}>
                </input>
            </Aux>
        );
    };
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);