import React, { Component } from 'react'

export default class Signup extends Component {
    state = {
        
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    signup = (e) => {
        e.preventDefault()
        const {email, password} = this.state
        Meteor.call('users.signup', {email, password}, (error, result) => {
            if(error){
                alert(error)
            }else{
                Meteor.loginWithPassword(email, password)
            }
        })
    }

    render(){
        const {email, password} = this.state

        return(
            <div>
                <p>Inscrivez-vous</p>
                <form onSubmit={this.signup}>
                    <input value={email} type="email" name="email" onChange={this.handleChange} placeholder="Email"/>
                    <input value={password} type="password" name="password" onChange={this.handleChange} placeholder="Password"/>
                    <button type="submit">M'inscrire</button>
                </form>
            </div>
        )
    }

}

