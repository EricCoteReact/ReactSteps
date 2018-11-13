import React from 'react';
import ReactDOM from 'react-dom';

//We can use destructuring to get props in classes
class Hello extends React.Component{
    render() {
        const {firstName, lastName} = this.props;
        return ( 
            <h1>
                Hello {firstName} {lastName}!
            </h1>
        );
    }

}


ReactDOM.render(<Hello firstName="John" lastName="Smith" />, 
                document.getElementById('root'));

