import React, {Component} from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class SigninForm extends Component {
    state = {
        
    }

    signin = () => {
        const {email, password} = this.state
        Meteor.loginWithPassword(email, password)
    }

    handleChange = (e, {name, value}) => this.setState({[name]: value})

    render(){
        const {email, password} = this.state

        return(
            <Form onSubmit={this.signin}>
                <Form.Group>
                    <Form.Input
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <Button size="mini">Connexion</Button>
                </Form.Group>
            </Form>
        )
    }
}