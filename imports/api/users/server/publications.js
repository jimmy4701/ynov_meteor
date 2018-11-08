import {Meteor} from 'meteor/meteor'

// Publications / Curseurs en temps réel vers la base mongo DB pour les utilisateurs

Meteor.publish('users.all', function(){
    if(this.userId){
        return Meteor.users.find({},{limit: 10000, sort:{}})
    }
})