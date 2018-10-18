import React, { Component } from 'react'


export default class Navbar extends Component {
    state = {
        title: "MA SUPER NAVBAR",
        color: "green"
    }

    toggleColor = () => this.setState({color: this.state.color == 'green' ? 'red' : 'green'})


    render(){

        const {forceTitle, height, onInternButtonClick} = this.props
        const {title, color} = this.state

        return(
            <div style={{backgroundColor: color, height}} onClick={() => onInternButtonClick("Mon titre")}>
                {forceTitle ? forceTitle : title}
            </div>
        )
    }

}

