import React from 'react';
import {Container} from 'reactstrap';
import Counter from './counter/Counter';
import './custom.scss';

export default class App extends React.Component {
    render() {
        return (
            <Container> 
                 <Counter init="1" />
            </Container> 
            )
    }
}