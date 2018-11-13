import React from 'react';
import ReactDOM from 'react-dom';

//We can use the new arrow functions
const Hello = ({firstName, lastName}) => (
        <h1>
            Hello {firstName} {lastName}!
        </h1>
    );

ReactDOM.render(<Hello firstName="John" lastName="Smith" />, 
                document.getElementById('root'));

