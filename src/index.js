import React from 'react';
import ReactDOM from 'react-dom';

//using state: using events
//modify state and see nothing on the screen
//We can use a ReactDOM.render to re-render

//We have a warning, this is not the right way.
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
        console.log(this.state.count);

        //ReactDOM.render(<Counter init={this.state.count} />, 
        //        document.getElementById('root'));
    }
}

ReactDOM.render(<Counter init="1" />, 
                document.getElementById('root'));

