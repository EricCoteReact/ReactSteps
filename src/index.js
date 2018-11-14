import React from 'react';
import ReactDOM from 'react-dom';

//using state: Old way of doing binding in the
//constructor
class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state={count: parseInt(props.init)};
        this.increase = this.increase.bind(this);
    }

    render() {
        return ( 
            <>
                <h1>Counter is {this.state.count}</h1>
                <button onClick={this.increase} >Increase</button>
            </>
        );
    }

    increase () {
        this.setState({count: this.state.count + 1});
    }
}

ReactDOM.render(<Counter init="1" />, 
                document.getElementById('root'));

