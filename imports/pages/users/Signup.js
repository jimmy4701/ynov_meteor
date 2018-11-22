import React, { Component } from 'react'
import { toast } from 'react-toastify'
import { Form, Container, Button} from 'semantic-ui-react'
import { withRouter, Redirect } from 'react-router-dom'
import { CardForm } from '/imports/components'

// Page / Composant React d'inscription

// Steps available
// credentials / payment / validation

class Signup extends Component {
    state = {
        step: "credentials"
    }

    // Modification d'un attribut du state en fonction de l'attribut name et value du input
    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    changeStep = (step) => this.setState({step})

    // Soumission du formulaire dans le composant, pour créer un utilisateur
    submitToken = (token) => {
        this.setState({loading: true})
        const {email, password } = this.state

        console.log("SIGNUP ON TOKEN", token)
        Meteor.call('users.signup', {email, password, token}, (error, result) => {
            if(error){
                toast.error(`Erreur lors de l'inscription ${error.message}`)
             }else{
                 // Si l'utilisateur a été créé, on le connecte dans la foulée avec Meteor et on le redirige vers la landing
                 this.props.history.push('/')
                 Meteor.loginWithPassword(email, password)
                 toast.success("YEAH")
             }
        })
       
    }


    render(){
        const {email, password, step, loading} = this.state

        return(
            <div>
                <Container>
                    <h2>Inscrivez-vous</h2>
                    {step == "credentials" &&
                        <Form onSubmit={() => this.changeStep('payment')} loading={loading} >
                            <Form.Input value={email} type="email" name="email" onChange={this.handleChange} placeholder="Email"/>
                            <Form.Input value={password} type="password" name="password" onChange={this.handleChange} placeholder="Password"/>
                            <Button disabled={!email || !password}>Suivant</Button>
                        </Form>
                    }
                    {step == "payment" &&
                        <div>
                            <h2>Payez votre abonnement à Hypperplanning</h2>
                            <p>Parce que tout a un coût dans la vie !</p>
                            <CardForm onToken={this.submitToken} />
                        </div>
                    }
                </Container>
            </div>
        )
    }

}

// Englobage du composant avec withRouter pour pouvoir utiliser this.props.history de react-router
export default withRouter(Signup)

