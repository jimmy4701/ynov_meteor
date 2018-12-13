import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Button, Container } from 'semantic-ui-react'
import UserPartial from '/imports/components/users/UserPartial'
import { toast } from 'react-toastify'


class Landing extends Component {
    state = {

    }

    updateSubscription = () => {
        Meteor.call('users.update_subscription', (error, result) => {
            if(error){
                console.log('Erreur', error.message)
                toast.error(error.message)
            }else{
                toast.success("CHECK YOUR CONSOLE")
            }
        })
    }


    render(){
        const {users, current_user} = this.props
        return(
            <div>
                <Container>
                    <Button size="huge" onClick={this.updateSubscription}>UPDATE SUBSCRIPTION</Button>
                    {users.length == 0 && <p>Aucun utilisateurs</p>}
                    {!current_user && <p>Vous devez vous connecter pour voir la liste des utilisateurs</p>}
                    {users.map(user => <UserPartial user={user}/>)}
                </Container>
            </div>
        )
    }

}

export default LandingContainer = withTracker(() => {
    const usersPublication = Meteor.subscribe('users.all')
    const users = Meteor.users.find({_id: {$ne: Meteor.userId()}}).fetch()
    const current_user = Meteor.user()
    return {
        users,
        current_user
    }
})(Landing)

