import React from 'react';
import Counter from './counter/Counter';
import './styles.css'

export default class App extends React.Component {
    render() {
        return ( <Counter init="1" /> )
    }
}