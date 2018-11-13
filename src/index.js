import React from 'react';
import ReactDOM from 'react-dom';

//using state:  setState, no more forceUpdate!

//We have a warning, this is still not the right way.
class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state={count: parseInt(props.init)};
    }

    render() {
        return ( 
            <>
                <h1>Counter is {this.state.count}</h1>
                <button onClick={this.increase.bind(this)} >Increase</button>
            </>
        );
    }

    increase() {
        this.state.count = this.state.count + 1;
        this.setState(this.state);
    }
}

ReactDOM.render(<Counter init="1" />, 
                document.getElementById('root'));

