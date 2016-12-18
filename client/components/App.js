import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';

import style from '../styles/style.scss';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="emptySpace"></div>
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
