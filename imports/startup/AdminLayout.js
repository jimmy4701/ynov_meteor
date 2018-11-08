import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'
import {Dashboard} from '/imports/pages/admin'
import {NotFound} from '/imports/pages'

export default class AdminLayout extends Component {

    render(){
        
        return(
            <Switch>
                <Route path="/admin" exact component={Dashboard} />
                <Route path="*" component={NotFound} />
            </Switch>
        )
    }
}
