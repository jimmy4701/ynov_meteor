import React, { Component } from 'react'
import Navbar from '/imports/components/Navbar'


export default class Landing extends Component {
    state = {
        navbar_color: ""
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    modifyTitle = (t) => {
        this.setState({landing_title: t ? t : "MODIFIÉ"})
    }

    render(){
        const {navbar_color, navbar_height, navbar_title, landing_title} = this.state
        return(
            <div>
                <Navbar onInternButtonClick={this.modifyTitle} />
                <form>
                    <input type="text" placeholder="navbar_color" name="navbar_color" onChange={this.handleChange} />
                    <input type="text" placeholder="navbar_title" name="navbar_title" onChange={this.handleChange} />
                    <input type="text" placeholder="navbar_height" name="navbar_height" onChange={this.handleChange} />
                </form>
                <h1>{landing_title}</h1>
            </div>
        )
    }

}

