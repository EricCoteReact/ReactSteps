import React from 'React'


//create a class App, export it by default
class App extends React.Component{
    render() {
        return <Counter init="1" /> ;
    }
}

export default App;


class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state={count: +props.init};
    }

    render() {
        return ( 
            <>
                <h1>Counter is {this.state.count}</h1>
                <MyButton onIncrease={this.increase} increment="1" />
                <MyButton onIncrease={this.increase} increment="10" />
                <MyButton onIncrease={this.increase} increment="100" />
            </>
        );
    }

    increase = (incr) => {
        this.setState({count: this.state.count + incr});
    }
}

function MyButton({increment, onIncrease}) {
    return <button onClick={(e) => onIncrease(+increment)} >Increase {increment}</button>
}






