import React, {Component} from 'react'
import { Form, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

// Composant React de formulaire de connexion

class SigninForm extends Component {
    state = {
        
    }

    signin = () => {
        const {email, password} = this.state
        Meteor.loginWithPassword(email, password, (error, result) => {
            if(error){
                toast.error(error.message)
            }else{
                this.props.history.push("/")
            }
        })
    }

    // Fonction de mofication du state en fonction de la valeur et de l'attribut name du input
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

// Englobage du composant avec withRouter pour avoir accès à this.props.history de react-router
export default withRouter(SigninForm)