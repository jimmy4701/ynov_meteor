import React, { Component } from 'react'
import { toast } from 'react-toastify'
import { Form, Container, Button} from 'semantic-ui-react'
import { withRouter, Redirect } from 'react-router-dom'

class Signup extends Component {
    state = {
        
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    submitForm = (e) => {
        e.preventDefault()
        this.setState({loading: true})
        const {email, password} = this.state
        Accounts.createUser({email, password}, (error, result) => {
            if(error){
               toast.error(`Erreur lors de l'inscription ${error.message}`)
            }else{
                Meteor.loginWithPassword(email, password)
                this.props.history.push("/")
            }
            this.setState({loading: false})
        })
    }

    render(){
        const {email, password, loading} = this.state

        return(
            <div>
                <Container>
                    <h2>Inscrivez-vous</h2>
                    <Form onSubmit={!loading && this.submitForm} loading={loading} >
                        <Form.Input value={email} type="email" name="email" onChange={this.handleChange} placeholder="Email"/>
                        <Form.Input value={password} type="password" name="password" onChange={this.handleChange} placeholder="Password"/>
                        <Button>M'inscrire</Button>
                    </Form>
                </Container>
            </div>
        )
    }

}

export default withRouter(Signup)

