import React, { Component } from 'react'
import { toast } from 'react-toastify'
import { Form, Container, Button} from 'semantic-ui-react'
import { withRouter, Redirect } from 'react-router-dom'

// Page / Composant React d'inscription

class Signup extends Component {
    state = {
        
    }

    // Modification d'un attribut du state en fonction de l'attribut name et value du input
    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    // Soumission du formulaire dans le composant, pour créer un utilisateur
    submitForm = (e) => {
        e.preventDefault()
        this.setState({loading: true})
        const {email, password} = this.state

        // Création d'un utilisateur en fonction de email et password, stocké dans le state, grâce au paquet accounts-password
        Accounts.createUser({email, password}, (error, result) => {
            if(error){
               toast.error(`Erreur lors de l'inscription ${error.message}`)
            }else{
                // Si l'utilisateur a été créé, on le connecte dans la foulée avec Meteor et on le redirige vers la landing
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

// Englobage du composant avec withRouter pour pouvoir utiliser this.props.history de react-router
export default withRouter(Signup)

