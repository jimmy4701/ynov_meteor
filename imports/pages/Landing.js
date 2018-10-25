import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'


class Landing extends Component {
    state = {

    }


    render(){
        const {users} = this.props
        return(
            <div>
                {JSON.stringify(users)}
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