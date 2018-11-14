import React from 'react';
import MyButton from './MyButton';
import {Input} from 'reactstrap';

export default class Counter extends React.Component{
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
                <Input type="text" value={this.state.count}
                       onChange={this.change} />              
            </>
        );
    }

    change = (e) => {
        if (Number.isInteger( +e.target.value )) {
            this.setState({count: +e.target.value});
        }
    };

    increase = (incr) => {
        this.setState({count: this.state.count + incr});
    };
}
