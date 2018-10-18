import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Landing, Signup} from '/imports/pages'

export default class App extends Component{

    render(){
        return(
            <Router>
                <Switch>
                    <Route component={Landing} path="/" exact />
                    <Route component={Signup} path="/signup" />
                </Switch>
            </Router>
        )
    }
}