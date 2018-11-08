import {Meteor} from 'meteor/meteor'

Meteor.publish('users.all', function(){
    if(this.userId){
        return Meteor.users.find({},{limit: 10000, sort:{}})
    }
})