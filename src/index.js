import React from 'react';
import ReactDOM from 'react-dom';

//using state:  setState isn't immediate.  
//the system will combine and schedule multiple setStates. 
//this is now wrong
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
        const modifs1 =  {count: this.state.count + 1};
        this.setState(modifs1);
        const modifs2 =  {count: this.state.count + 1};
        this.setState(modifs2);
    }
}

ReactDOM.render(<Counter init="1" />, 
                document.getElementById('root'));

