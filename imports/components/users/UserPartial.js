import React, {Component} from 'react'
import { Segment, Button } from 'semantic-ui-react'
import { toast } from 'react-toastify'

// Composant React de représentation d'un utilisateur

// Affiche le bouton "supprimer" si l'utilisateur en question (passé en props) n'est pas admin

export default class UserPartial extends Component{
    state = {

    }

    remove = () => {
        Meteor.call('users.remove', this.props.user._id, (error, result) => {
            if(error){
                toast.error(error.reason)
            }
        })
    }

    render(){
        const {user} = this.props
        return(
            <Segment>
                <h3>{user.emails[0].address}</h3>
                {!Roles.userIsInRole(user._id, 'admin') && 
                    <Button onClick={this.remove} color="red" size="mini">Supprimer</Button>
                }
            </Segment>
        )
    }
}