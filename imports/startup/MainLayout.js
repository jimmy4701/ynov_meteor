import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'
import {Landing, Signup } from '/imports/pages'

export default class MainLayout extends Component {

    render(){
        
        return(
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/signup" component={Signup} />
            </Switch>
        )
    }
}