import React, { Component } from 'react'


export default class Navbar extends Component {
    state = {
        title: "MA SUPER NAVBAR"
    }

    render(){

        const {color, forceTitle} = this.props
        const {title} = this.state

        return(
            <div style={{backgroundColor: color}}>
                {forceTitle ? forceTitle : title}
            </div>
        )
    }

}

