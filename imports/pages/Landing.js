import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Button, Container } from 'semantic-ui-react'
import UserPartial from '/imports/components/users/UserPartial'

// Page / Composant React de la landing

class Landing extends Component {
    state = {

    }


    render(){
        const {users, current_user} = this.props
        return(
            <div>
                <Container>
                    {users.length == 0 && <p>Aucun utilisateurs</p>}
                    {!current_user && <p>Vous devez vous connecter pour voir la liste des utilisateurs</p>}
                    {users.map(user => <UserPartial user={user}/>)}
                </Container>
            </div>
        )
    }

}

// On englobe le composant dans un withTracker pour écouter les données de Meteor en temps réel et les passer
// en props au composant afin qu'il réagisse en temps réel quand quelque chose se passe coté serveur
export default LandingContainer = withTracker(() => {
    // On écoute la publication users.all qui nous retourne tous les utilisateurs
    const usersPublication = Meteor.subscribe('users.all')
    // On stocke les utilisateur auxquels on a accès dans un tableau
    const users = Meteor.users.find({_id: {$ne: Meteor.userId()}}).fetch()
    // On récupère l'utilisateur courant
    const current_user = Meteor.user()
    return {
        users,
        current_user
    }
})(Landing)