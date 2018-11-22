import React, { Component, Fragment } from 'react'
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {SigninForm, SigninModal} from '/imports/components'

class Navbar extends Component {
    state = {
        connect: false
    }

    // Déconnexion de l'utilisateur
    logout = () => {
        Meteor.logout()
    }

    /* Switch d'un attribut du state
        e : événement de click, passé initialement par le DOM
        name : destructuring de l'attribut name du bouton sur lequel on a cliqué
    */
    toggleState = (e, {name}) => this.setState({[name]: !this.state[name]})


    render(){
        const {user} = this.props
        const {connect} = this.state
        return(
            <MainContainer>
                <MainImage src="/images/timeline.svg" />
                <div>
                    {user ?
                        <Fragment>
                            {Roles.userIsInRole(user._id, "admin") &&
                                <Link to="/admin">
                                    <Button size="mini">ADMIN</Button> 
                                </Link>
                            }
                            <Button onClick={this.logout}>DECONNEXION</Button> 
                        </Fragment>
                        :
                        <Fragment>
                            {connect ?
                                <SigninModal open={true} onClose={(e) => this.toggleState(e, {name: "connect"})}/>
                            :
                                <Button onClick={this.toggleState} name="connect" size="mini">Connexion</Button>
                            }
                            <Link to="/signup">
                                <Button size="mini">Inscription</Button> 
                            </Link>
                        </Fragment>
                    }
                </div>
            </MainContainer>
        )
    }

}

export default NavbarContainer = withTracker((props) => {
    // Tracker React Meteor, dans lequel on récupère les changements des variables provenant de Meteor
    // pour les passer en props au composant React
    return {
        user: Meteor.user()
    }
})(Navbar)

// Mini-composant créé avec Styled Components, pour éviter à avoir à écrire du code css ailleurs
const MainContainer = styled.div`
    height: 4em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #d8d8d8;
`

const MainImage = styled.img`
    max-height: 75%;
    margin: 1em;
`