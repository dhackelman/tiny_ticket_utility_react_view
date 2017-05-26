import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import './styles/app.css';
import App from './components/App';
import NotFound from './components/NotFound';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute path='/' component={App}/>
              <Route path="*" component={NotFound}/>
        </Route>
    </Router>
), document.getElementById('main'));
