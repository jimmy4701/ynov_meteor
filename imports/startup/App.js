import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Landing, Signup} from '/imports/pages'
import Navbar from '/imports/components/Navbar'

export default class App extends Component{

    render(){
        return(
            <div>
                <Router>
                    <div>
                        <Navbar />
                        <Switch>
                            <Route component={Landing} path="/" exact />
                            <Route component={Signup} path="/signup" />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}