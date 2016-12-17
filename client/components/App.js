import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';

import style from '../styles/style.scss';

export default class App extends Component {

    render() {
        return (
            <div className="app">
                <h3 className="text-center">StockTwits</h3>
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
