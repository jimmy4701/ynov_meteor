import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor';


export default class Navbar extends Component {
    state = {
        
    }

    
    logout = () => {
        Meteor.logout
    }

    render(){

        return(
            <div style={{backgroundColor: "#f2f2f2", borderBottom: "1px solid black"}}>
                {Meteor.userId() ? <button onClick={this.logout}>DECONNEXION</button> : ""}
            </div>
        )
    }

}

