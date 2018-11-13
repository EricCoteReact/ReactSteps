import React from 'react';
import ReactDOM from 'react-dom';

//We can use classes we gain then a few things:
//state and lifecycle methods
class Hello extends React.Component{
    render() {
        return ( 
            <h1>
                Hello {this.props.firstName} {this.props.lastName}!
            </h1>
        );
    }

}


ReactDOM.render(<Hello firstName="John" lastName="Smith" />, 
                document.getElementById('root'));

