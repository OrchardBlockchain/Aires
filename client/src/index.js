import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

class App extends React.Component {

    render() {
        return (
            <div className="main">
                    <Switch>
                        <Route exact path='/' component= {LoginPage} />
                        <Route exact path='/register' component= {RegisterPage} />

                    </Switch>
            </div>

        );
    }
}

ReactDOM.render((<BrowserRouter>
                    <App />
                </BrowserRouter>), document.getElementById('app'));