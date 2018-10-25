import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Button, Container } from 'semantic-ui-react'
import UserPartial from '/imports/components/users/UserPartial'


class Landing extends Component {
    state = {

    }


    render(){
        const {users} = this.props
        return(
            <div>
                <Container>
                    {users.map(user => <UserPartial user={user}/>)}
                </Container>
            </div>
        )
    }

}

export default LandingContainer = withTracker(() => {
    const usersPublication = Meteor.subscribe('users.all')
    const users = Meteor.users.find().fetch()
    return {
        users
    }
})(Landing)