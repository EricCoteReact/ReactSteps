import React from 'react';
import ReactDOM from 'react-dom';

//using state : initialize and show
class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state={count: props.init};
    }

    render() {
        return ( 
            <h1>
                Counter is {this.state.count}
            </h1>
        );
    }

}


ReactDOM.render(<Counter init="1" />, 
                document.getElementById('root'));

