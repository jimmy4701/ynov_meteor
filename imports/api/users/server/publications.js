import {Meteor} from 'meteor/meteor'

Meteor.publish('users.all', function(){
    return Meteor.users.find({},{limit: 10000, sort:{}})
})