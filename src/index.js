import React from 'react';
import ReactDOM from 'react-dom';

//We can create a component using a function
//(rule: all component must start with an uppercase letter, 
//while DOM elements start with a lowercase)
function Hello() {
    return <h1>Hello world!</h1>
} 


ReactDOM.render(<Hello />, document.getElementById('root'));

