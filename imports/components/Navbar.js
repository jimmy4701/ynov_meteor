import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data'


class Navbar extends Component {
    state = {
        
    }

    
    logout = () => {
        Meteor.logout()
    }

    render(){
        const {user} = this.props

        return(
            <div style={{backgroundColor: "#f2f2f2", borderBottom: "1px solid black"}}>
                {user ? <button onClick={this.logout}>DECONNEXION</button> : ""}
            </div>
        )
    }

}

export default NavbarContainer = withTracker(() => {
    return {
        user: Meteor.user()
    }
})(Navbar)