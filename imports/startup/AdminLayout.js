import React, { Component } from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import {Dashboard} from '/imports/pages/admin'
import {NotFound} from '/imports/pages'
import { withTracker } from 'meteor/react-meteor-data'

/*
    Layout pour les routes admin
    Vérifie que l'utilisateur est bien connecté pour afficher les routes en question,
    sinon redirige vers la landing grâce au composant Redirect de react-router-dom
*/

class AdminLayout extends Component {

    render(){
        const {user} = this.props

        if(user){
            return(
                <Switch>
                    <Route path="/admin" exact component={Dashboard} />
                    <Route path="*" component={NotFound} />
                </Switch>
            )
        }else{
            return <Redirect to="/signup" />
        }
    }
}

export default AdminLayoutContainer = withTracker(() => {
    const user = Meteor.user()
    return {
        user
    }
})(AdminLayout)