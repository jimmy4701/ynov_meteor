import {Meteor} from 'meteor/meteor'

Meteor.methods({
    'users.signup'({email, password}){
        Accounts.createUser({email, password})
    },
    'users.remove'(user_id){
        if(Roles.userIsInRole(this.userId, 'admin') && (user_id != this.userId)){
            if(!Roles.userIsInRole(user_id, 'admin')){
                Meteor.users.remove({_id: user_id})
            }
        }else{
            throw new Meteor.Error('403', "Vous n'etes pas administrateur")
        }
    }
})