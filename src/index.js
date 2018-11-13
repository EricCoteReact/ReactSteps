import React from 'react';
import ReactDOM from 'react-dom';

//JSX can always be replaced with React.createElement
function Hello() {
    return React.createElement("h1", null, "Hello world!")
} 


ReactDOM.render(React.createElement(Hello), document.getElementById('root'));

