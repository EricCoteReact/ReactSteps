import React from 'react';
import ReactDOM from 'react-dom';

//We can use multiple props
function Hello(props) {
    return <h1>Hello {props.children} {props.lastName}</h1>
} 

ReactDOM.render(<Hello lastName="Smith">John</Hello>, document.getElementById('root'));

