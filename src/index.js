import React from 'react';
import ReactDOM from 'react-dom';

//using state:  using a setState function will solve the
//scheduling problem with setState.
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
        const modifs1 = (prevState) => ({count: prevState.count + 1});
        this.setState(modifs1);
        const modifs2 =  (prevState) => ({count: prevState.count + 1});
        this.setState(modifs2);
    }
}

ReactDOM.render(<Counter init="1" />, 
                document.getElementById('root'));

