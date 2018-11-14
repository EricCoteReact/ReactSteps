import React from 'react';
import Counter from './counter/Counter';
import './custom.scss'


//npm install node-sass
//npm install bootstrap reactstrap
//create custom.scss

export default class App extends React.Component {
    render() {
        return ( <Counter init="1" /> )
    }
}