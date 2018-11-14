import React from 'react';
import ReactDOM from 'react-dom';

//using state: create different buttons that do different thingsss
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
                <button onClick={(e) => this.increase(1)} >Increase 1</button>
                <button onClick={(e) => this.increase(10)} >Increase 10</button>
                <button onClick={(e) => this.increase(100)} >Increase 100</button>
            </>
        );
    }

    increase(incr)  {
        this.setState({count: this.state.count + incr});
    }
}

ReactDOM.render(<Counter init="1" />, 
                document.getElementById('root'));

