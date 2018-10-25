import React, { Component, Fragment } from 'react'
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import SigninForm from '/imports/components/users/SigninForm'

class Navbar extends Component {
    state = {
        connect: false
    }

    
    logout = () => {
        Meteor.logout()
    }

    toggleState = (e, {name}) => this.setState({[name]: !this.state[name]})


    render(){
        const {user} = this.props
        const {connect} = this.state
        return(
            <MainContainer>
                {user ? 
                    <Button onClick={this.logout}>DECONNEXION</Button> 
                    :
                    <Fragment>
                        {connect ?
                            <SigninForm />
                        :
                            <Button onClick={this.toggleState} name="connect" size="mini">Connexion</Button>
                        }
                        <Link to="/signup">
                            <Button size="mini">Inscription</Button> 
                        </Link>
                    </Fragment>
                }
            </MainContainer>
        )
    }

}

export default NavbarContainer = withTracker((props) => {
    return {
        user: Meteor.user()
    }
})(Navbar)

const MainContainer = styled.div`
    height: 4em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 2px solid #d8d8d8;
`