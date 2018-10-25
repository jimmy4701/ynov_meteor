import React, { Component, Fragment } from 'react'
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    state = {
        
    }

    
    logout = () => {
        Meteor.logout()
    }

    render(){
        const {user} = this.props

        return(
            <MainContainer>
                {user ? 
                    <Button onClick={this.logout}>DECONNEXION</Button> 
                    :
                    <Fragment>
                        <Button size="mini">Connexion</Button>
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