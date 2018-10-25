import {Meteor} from 'meteor/meteor'

Meteor.methods({
    'users.signup'({email, password}){
        Accounts.createUser({email, password})
    },
    'users.remove'(user_id){
        Meteor.users.remove({_id: user_id})
    }
})