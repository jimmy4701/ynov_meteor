import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'
import {Landing, Signup, NotFound } from '/imports/pages'

export default class MainLayout extends Component {

    render(){
        
        return(
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/signup" component={Signup} />
                <Route path="*" component={NotFound} />
            </Switch>
        )
    }
}