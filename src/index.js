import React from 'react';
import ReactDOM from 'react-dom';

//props can be used to pass data
function Hello(props) {
    return <h1>Hello {props.children}</h1>
} 


ReactDOM.render(<Hello>Eric</Hello>, document.getElementById('root'));

