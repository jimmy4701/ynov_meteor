import {Meteor} from 'meteor/meteor'

Meteor.methods({
    'users.signup'({email, password}){
        Accounts.createUser({email, password})
    }
})