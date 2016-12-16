import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import Main from './components/Main';
import Test from './containers/Test';
import NotFoundSection from './components/NotFoundSection';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Main}/>
        <Route path="test" component={Test}/>
        <Route path='*' component={NotFoundSection}/>

    </Route>
)
