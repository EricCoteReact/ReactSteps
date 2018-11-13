import React from 'react';
import ReactDOM from 'react-dom';

//using state:  setState, no more state mutations!
//the right way most of the time
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
        const modifs =  {count: this.state.count + 1}
        this.setState(modifs);
    }
}

ReactDOM.render(<Counter init="1" />, 
                document.getElementById('root'));

