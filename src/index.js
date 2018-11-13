import React from 'react';
import ReactDOM from 'react-dom';

//We can use destructuring instead of using props
function Hello({firstName, lastName}) {
    return (
        <h1>
            Hello {firstName} {lastName}!
        </h1>
    );
} 

ReactDOM.render(<Hello firstName="John" lastName="Smith" />, 
                document.getElementById('root'));

