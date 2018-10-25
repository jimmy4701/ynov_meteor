import React, {Component} from 'react'
import { Segment, Button } from 'semantic-ui-react'

export default class UserPartial extends Component{
    state = {

    }

    remove = () => {
        Meteor.call('users.remove', this.props.user._id, (error, result) => {
            if(error){
                alert('Erreur', error)
            }
        })
    }

    render(){
        const {user} = this.props
        return(
            <Segment>
                <h3>{user.emails[0].address}</h3>
                <Button onClick={this.remove} color="red" size="mini">Supprimer</Button>
            </Segment>
        )
    }
}