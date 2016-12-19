import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

import style from '../styles/style.scss';
// import '../assets/imgs/favicon.ico';


export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="emptySpace"></div>
                {this.props.children}
            </div>
        );
    }
}
